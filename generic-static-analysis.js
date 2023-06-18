const config = require("./generic/functions/config-reader");
const analyzeFile = require("./generic/functions/analyze-file");
const { compileClasses } = require("./generic/functions/compile-classes");
const {
  traverseDirectory,
  watchDirectory,
} = require("./generic/functions/traverse-directory");
const fs = require("fs");
const { outputCSSFile } = require("./generic/store");
const {
  addToCompilationCache,
  resetCompilationCache,
} = require("./generic/functions/cache-manager");

const projectDirectory = config.watchDirectory || "./";
let countToRecompilation = 0;

function runCompilation(filePath) {
  const classNames = analyzeFile(filePath);
  const compiledClasses = compileClasses(classNames);
  let cssContent = "";
  for (const className in compiledClasses) {
    addToCompilationCache(className, compiledClasses[className]);
    cssContent += `${compiledClasses[className]} \n`;
    countToRecompilation++;
  }
  return cssContent;
}

function build() {
  let globalCssContent = "";
  traverseDirectory(projectDirectory, (filePath) => {
    globalCssContent += runCompilation(filePath);
    fs.writeFileSync(outputCSSFile, globalCssContent);
  });
}

function watch() {
  watchDirectory(projectDirectory, (filePath) => {
    const cssContent = runCompilation(filePath);
    fs.appendFileSync(outputCSSFile, cssContent);
    if (countToRecompilation >= 50) {
      resetCompilationCache();
      build();
      countToRecompilation = 0;
    }
  });
}

function exec() {
  try {
    build();
    watch();
  } catch (error) {
    console.log({ error });
    exec();
  }
}

exec()

// module.exports = {
//   exec,
// };

/**
 *
 * TODO:
 *
 * - Classname Chaining
 * - Optimise compilation
 * - Use single media queries
 */
