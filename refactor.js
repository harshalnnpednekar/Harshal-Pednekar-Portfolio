const fs = require('fs');
let content = fs.readFileSync('src/components/About.jsx', 'utf8');

// Add import
content = 'import Reveal from "./Reveal";\n' + content;

// Replace styles
content = content.replace(/<div([^>]+?)style=\{\{\s*animation:\s*'fadeInUp 0\.8s ease-out ([\d\.]+)s both'\s*\}\}>/g, '<Reveal$1delay="$2s">');
content = content.replace(/<div([^>]+?)style=\{\{\s*animation:\s*'fadeInUp 0\.8s ease-out both'\s*\}\}>/g, '<Reveal$1>');
content = content.replace(/<div([^>]+?)style=\{\{\s*animation:\s*`fadeInUp 0\.6s ease-out \$\{([^}]+)\} both`\s*\}\}>/g, '<Reveal$1delay={$2}>');

// Now we need to close the tags.
// Since we are replacing `<div` with `<Reveal`, we must replace the corresponding `</div>` with `</Reveal>`.
// To do this simply in a regex is difficult because of nested divs.
// Wait, this is a bad idea because of nested divs. A simple regex replace of `</div>` to `</Reveal>` won't work correctly unless we only replace the ones matching.
