const fs = require('fs');
const chokidar = require('chokidar');
const config = require('./config-reader')

const location = config.location || 'src/styles/generic';

const SCSS_FILE = location + '/_generic.scss';
const OUTPUT_FILE = location + '/map.css.ts';

const generateMap = () => {

  // Read _generic.scss file
  const scssContent = fs.readFileSync(SCSS_FILE, 'utf8');

  // Process each line of the SCSS file
  const lines = scssContent.split('\n');
  const outputLines = lines.map((line) => {
    // Check if the line contains a CSS class
    if (line.trim().indexOf('.') == 0) {
      // Transform the class name to the desired output format
      const outputClassName = line.replaceAll(/(.)(([\w_-]+)([${}#\w()\+\s-]*))/g, (match) => {
        const result = match.replace(/{(?![^{]*})/g, '')
        const removedCurlyBrace = match.replace(result, '')
        const className = result.replace('.', '').trim();
        console.log(`[class~='sm:${className}']${removedCurlyBrace}`);
        return `[class~='{{breakpoint}}:${className}']${removedCurlyBrace}`;
      });

      // Return the transformed line
      return `${outputClassName}`;
    }

    // Return the line as is
    return line;
  });

  // Join the lines into a single string
  const outputContent = outputLines.join('\n');
  // console.log({outputContent, type: typeof outputContent});
  const finalContent = modifyContentWithBreakpoint(outputContent);
  // Write the transformed content to _generic.map.scss
  // console.log({finalContent});
  fs.writeFileSync(OUTPUT_FILE, finalContent);

  console.log(`Generated ${OUTPUT_FILE}`);  
}

const modifyContentWithBreakpoint = (content) => {
  // console.log({config});
  const replacedContent = content.replaceAll(/\/\*\* \{\{breakpoint_start\}\} \*\*\/([\s\S]*?)(\/\*\* \{\{breakpoint_end\}\} \*\*\/)/g, 
  (match) => {
    console.log({match});
    return (
    ` ${
        Object.keys(config.breakpoints).map((breakpoint) => (
    `
@include ${breakpoint} {
        ${match.replaceAll('{{breakpoint}}', breakpoint).trim()}
}
    `
  )).join('\n') 
  }`
    )
  })
  return replacedContent;
}

generateMap()

chokidar.watch(SCSS_FILE).on('change', generateMap);
