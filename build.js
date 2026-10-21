// Stitches every teammate's HTML partial into index.html (no dependencies).  Run: node build.js
const fs = require('fs'), path = require('path');
const read = f => fs.readFileSync(path.join(__dirname, 'src', f), 'utf8');
const scripts = ['shared/core.js', 'shared/antigravity.js', 'priyanshu/priyanshu.js', 'ishita/ishita.js',
                 'sania/sania.js', 'ridhi/ridhi.js'].map(s => `<script src="src/${s}"></script>`).join('\n');
const parts = [
  'shared/head.html', 'shared/body-top.html',
  'priyanshu/navbar.html',
  '@<main class="w-full pt-20 flex-1 relative z-10">\n<div class="flex flex-col w-full text-white">\n',
  'ishita/home.html', 'ishita/about.html',          // Ishita
  'ridhi/what-we-do.html', 'ridhi/projects.html', 'ridhi/gallery.html',   // Ridhi
  'sania/team.html', 'sania/contact.html',          // Sania
  '@</div>\n</main>\n',
  'priyanshu/footer.html', 'ridhi/modals.html',
  '@' + scripts + '\n</body></html>\n'
];
const out = parts.map(p => p[0] === '@' ? p.slice(1) : read(p)).join('\n');
fs.writeFileSync(path.join(__dirname, 'index.html'), out);
console.log('index.html built (' + out.length + ' bytes)');
