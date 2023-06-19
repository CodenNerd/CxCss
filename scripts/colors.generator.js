const fs = require('fs');
const config = require('./config-reader')


// Function to generate the mixin content and write it to the output file
function generate() {
  // Read the generic.config.json file

  const outputLocation = config.location || 'src/styles/generic';
  const outputFile = `${outputLocation}/_colors.scss`;
  // Read the previous colors from the cache file (if it exists)
  const cacheFile = `${outputLocation}/colors.cache.json`;
  let previousColors = {};
  if (fs.existsSync(cacheFile)) {
    const cacheData = fs.readFileSync(cacheFile, 'utf8');
    previousColors = JSON.parse(cacheData);
  }

  // Check if the colors have changed
  const colorsChanged = JSON.stringify(config.colors) !== JSON.stringify(previousColors);

  // If colors have changed, generate and write the mixin content
  if (colorsChanged) {
    let content = '';
    Object.entries(config.colors || {}).forEach(([color, value]) => {


      content +=(
`
  .bg-${color} {
    background-color: ${value};
  }

  .text-${color} {
    color: ${value};
  }

  .border-${color} {
    border-color: ${value};
  }

`)

    });

    // Write the mixin content to the output file
    fs.writeFileSync(outputFile, content);
    console.log(`Generated ${outputFile}`);

    // Update the cache file with the new colors
    fs.writeFileSync(cacheFile, JSON.stringify(config.colors));
    console.log(`Updated colors cache`);
  } else {
    console.log(`No changes in colors`);
  }
}

try {
  generate();  
} catch (error) {
    console.log('Error generating colors: ', error)
}



