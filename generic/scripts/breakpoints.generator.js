const fs = require('fs');
const config = require('./config-reader')


// Function to generate the mixin content and write it to the output file
function generateMixins() {
  // Read the generic.config.json file

  const outputLocation = config.location || 'src/styles/generic';
  const outputFile = `${outputLocation}/_respond.scss`;
  // Read the previous breakpoints from the cache file (if it exists)
  const cacheFile = `${outputLocation}/breakpoints.cache.json`;
  let previousBreakpoints = {};
  if (fs.existsSync(cacheFile)) {
    const cacheData = fs.readFileSync(cacheFile, 'utf8');
    previousBreakpoints = JSON.parse(cacheData);
  }

  // Check if the breakpoints have changed
  const breakpointsChanged = JSON.stringify(config.breakpoints) !== JSON.stringify(previousBreakpoints);

  // If breakpoints have changed, generate and write the mixin content
  if (breakpointsChanged) {
    // Generate the mixin content
    let mixinContent = '';
    Object.entries(config.breakpoints).forEach(([breakpoint, value]) => {
      mixinContent += `@mixin ${breakpoint} {\n`;
      mixinContent += `  @media only screen and (min-width: ${value}) {\n`;
      mixinContent += `    @content;\n`;
      mixinContent += `  }\n`;
      mixinContent += `}\n\n`;
    });

    // Write the mixin content to the output file
    fs.writeFileSync(outputFile, mixinContent);
    console.log(`Generated ${outputFile}`);

    // Update the cache file with the new breakpoints
    fs.writeFileSync(cacheFile, JSON.stringify(config.breakpoints));
    console.log(`Updated breakpoints cache`);
  } else {
    console.log(`No changes in breakpoints`);
  }
}

try {
  generateMixins();  
} catch (error) {
    console.log('Error generating breakpoints: ', error)
}
// Generate mixins initially



