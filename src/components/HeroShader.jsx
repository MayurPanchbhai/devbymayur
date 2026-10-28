import React, { useEffect, useRef } from 'react';

export default function HeroShader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const gl = cv.getContext('webgl', { antialias: false, alpha: true });
    if (!gl) return;

    const vsrc = `
      attribute vec2 pos;
      void main() {
        gl_Position = vec4(pos, 0.0, 1.0);
      }
    `;

    const fsrc = `
      precision highp float;
      uniform vec2 res;
      uniform float time;
      uniform vec2 ptr;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int k = 0; k < 5; k++) {
          v += a * noise(p);
          p *= 2.02;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / res.xy;
        vec2 p = uv * vec2(res.x / res.y, 1.0);
        float t = time * 0.030;
        vec2 q = vec2(fbm(p * 1.15 + vec2(0.0, t)), fbm(p * 1.15 + vec2(5.2, 1.3 - t)));
        vec2 r = vec2(
          fbm(p * 1.15 + 3.0 * q + vec2(1.7, 9.2) + t * 1.1),
          fbm(p * 1.15 + 3.0 * q + vec2(8.3, 2.8) - t * 0.9)
        );
        float f = fbm(p * 1.15 + 2.8 * r);
        float pd = distance(uv, ptr);
        f += 0.14 * exp(-pd * 3.2);

        vec3 c1 = vec3(0.055, 0.024, 0.259);
        vec3 c2 = vec3(0.145, 0.067, 0.545);
        vec3 c3 = vec3(0.318, 0.165, 0.898);
        vec3 c4 = vec3(0.600, 0.494, 0.976);
        vec3 c5 = vec3(0.839, 0.796, 0.996);
        vec3 c6 = vec3(0.949, 0.933, 1.000);

        float g = pow(smoothstep(0.02, 0.98, f), 0.82);
        vec3 col = mix(c1, c2, smoothstep(0.00, 0.40, g));
        col = mix(col, c3, smoothstep(0.22, 0.64, g));
        col = mix(col, c4, smoothstep(0.48, 0.86, g));
        col = mix(col, c5, smoothstep(0.72, 1.00, g));
        col = mix(col, c6, smoothstep(0.90, 1.10, g));
        col = mix(col, c6, 0.34 * pow(1.0 - uv.y, 1.7) * smoothstep(0.25, 1.0, uv.x));
        col *= 0.60 + 0.66 * smoothstep(0.0, 1.0, 1.0 - uv.y * 0.88);
        col = clamp((col - 0.5) * 1.16 + 0.5, 0.0, 1.0);
        col += (hash(gl_FragCoord.xy + time) - 0.5) * 0.014;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function createShader(kind, source) {
      const sh = gl.createShader(kind);
      gl.shaderSource(sh, source);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.warn(gl.getShaderInfoLog(sh));
        return null;
      }
      return sh;
    }

    const vs = createShader(gl.VERTEX_SHADER, vsrc);
    const fs = createShader(gl.FRAGMENT_SHADER, fsrc);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, 'pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const ures = gl.getUniformLocation(prog, 'res');
    const utime = gl.getUniformLocation(prog, 'time');
    const uptr = gl.getUniformLocation(prog, 'ptr');

    let mx = 0.7;
    let my = 0.5;
    let tmx = 0.7;
    let tmy = 0.5;

    const hero = cv.closest('.hero-sec') || cv.parentElement;
    const onPointerMove = (ev) => {
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      tmx = (ev.clientX - r.left) / (r.width || 1);
      tmy = 1.0 - (ev.clientY - r.top) / (r.height || 1);
    };

    const onTouchMove = (ev) => {
      if (!hero || !ev.touches || !ev.touches[0]) return;
      const touch = ev.touches[0];
      const r = hero.getBoundingClientRect();
      tmx = (touch.clientX - r.left) / (r.width || 1);
      tmy = 1.0 - (touch.clientY - r.top) / (r.height || 1);
    };

    if (hero) {
      hero.addEventListener('pointermove', onPointerMove, { passive: true });
      hero.addEventListener('touchmove', onTouchMove, { passive: true });
    }

    function resize() {
      // Clamp DPR to 1.5 for performance across mobile devices
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const box = cv.getBoundingClientRect();
      const cw = cv.clientWidth || box.width || (cv.parentElement ? cv.parentElement.clientWidth : 0);
      const ch = cv.clientHeight || box.height || (cv.parentElement ? cv.parentElement.clientHeight : 0);
      const w = Math.max(2, Math.round(cw * dpr));
      const hh = Math.max(2, Math.round(ch * dpr));
      if (cv.width !== w || cv.height !== hh) {
        cv.width = w;
        cv.height = hh;
        gl.viewport(0, 0, w, hh);
      }
    }

    window.addEventListener('resize', resize);
    const ro = window.ResizeObserver ? new ResizeObserver(resize) : null;
    if (ro) ro.observe(cv);

    let animationFrameId;
    const t0 = performance.now();
    let isVisible = true;

    let observer = null;
    if (hero && window.IntersectionObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          isVisible = entries[0].isIntersecting;
        },
        { rootMargin: '120px' }
      );
      observer.observe(hero);
    }

    function render(now) {
      animationFrameId = requestAnimationFrame(render);
      resize();
      if (!isVisible || cv.width < 4) return;

      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;

      gl.uniform2f(ures, cv.width, cv.height);
      gl.uniform1f(utime, (now - t0) / 1000);
      gl.uniform2f(uptr, mx, my);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (ro) ro.disconnect();
      if (observer) observer.disconnect();
      if (hero) {
        hero.removeEventListener('pointermove', onPointerMove);
        hero.removeEventListener('touchmove', onTouchMove);
      }
    };
  }, []);

  return (
    <canvas
      id="hero-shader"
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: '-2%',
        width: '104%',
        height: '104%',
        display: 'block',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
