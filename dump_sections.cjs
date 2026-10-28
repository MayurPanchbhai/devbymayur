const fs = require('fs');
const html = fs.readFileSync('theblur_structure.html', 'utf8');

function clean(str) {
  return str.replace(/data:image\/[^;]+;base64,[^"'\s)]+/g, 'BASE64_DATA');
}

// Let's get the nav
const nav = html.match(/<nav[\s\S]*?<\/nav>/i)?.[0];
if (nav) fs.writeFileSync('dump_nav.html', clean(nav));

// Let's get each section by data-screen-label
const labels = ['Hero', 'Trust', 'Capabilities', 'Services', 'Work', 'How we work', 'Testimonials', 'Closing'];
labels.forEach(label => {
  const re = new RegExp(`<section[^>]*data-screen-label="${label}"[\\s\\S]*?<\\/section>`, 'i');
  const m = html.match(re);
  if (m) {
    fs.writeFileSync(`dump_sec_${label.replace(/\s+/g, '_')}.html`, clean(m[0]));
    console.log(`Saved ${label}: ${m[0].length} chars`);
  } else {
    console.log(`Not found: ${label}`);
  }
});

