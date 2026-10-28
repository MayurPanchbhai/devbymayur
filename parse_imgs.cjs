const fs = require('fs');
const html = fs.readFileSync('theblur_structure.html', 'utf8');

// Find all img tags with their attributes
const imgMatches = [...html.matchAll(/<img([^>]+)>/gi)].map(m => m[1]);
console.log('Total img tags:', imgMatches.length);

imgMatches.forEach((attrs, i) => {
  const alt = attrs.match(/alt=["']([^"']*)["']/i)?.[1] || '';
  const src = attrs.match(/src=["']([^"']*)["']/i)?.[1] || '';
  console.log(`Img ${i}: alt="${alt}", srcType=${src.slice(0, 30)}...`);
});

