const fs = require('fs');

const files = [
  'src/pages/Pricing.tsx',
  'src/pages/Gallery.tsx',
  'src/pages/Contact.tsx',
  'src/pages/Terms.tsx',
  'src/pages/Programs.tsx',
  'src/pages/Reviews.tsx',
  'src/pages/Schedule.tsx',
  'src/components/About.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the exact block starting from <div className="container relative z-10 max-w-4xl mx-auto">
  const regex = /<div className="container relative z-10 max-w-4xl mx-auto">\s*<motion\.div\s*initial={{ opacity: 0, y: 15 }}\s*animate={{ opacity: 1, y: 0 }}\s*transition={{ duration: 0\.8 }}\s*>\s*<span className="([^"]*) block">([^<]+)<\/span>\s*<h1 className="([^"]*)">\s*([\s\S]*?)<\/h1>\s*<p className="([^"]*) mx-auto mb-8">\s*([\s\S]*?)<\/p>\s*<div className="w-[0-9]+ h-\[1px\] bg-gold\/30 mx-auto" \/>\s*<\/motion\.div>\s*<\/div>/m;
  
  const match = content.match(regex);
  if (match) {
    const spanClass = match[1];
    const spanText = match[2];
    const h1Class = match[3];
    const h1Content = match[4].trim();
    const pClass = match[5];
    const pContent = match[6].trim();
    
    // Replace block with block
    const replacement = `<div className="w-full relative z-10 px-6 sm:px-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto"
          >
            <span className="${spanClass} inline-block text-center w-full">${spanText}</span>
            <h1 className="${h1Class} text-center w-full flex-shrink-0">
              ${h1Content}
            </h1>
            <p className="${pClass} mx-auto mb-8 text-center w-full">
              ${pContent}
            </p>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </motion.div>
        </div>`;
    
    content = content.replace(regex, replacement);
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  } else {
    // If it's Terms page which uses a slightly different text color class
    console.log('No match for standard in', file);
  }
});
