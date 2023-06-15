function convertScssToJs(scssSnippet) {
    // Remove SCSS comments
    const scssWithoutComments = scssSnippet.replace(/\/\*(.*?)\*\//gs, '');
  
    // Convert SCSS variables to JavaScript variables
    const jsSnippet = scssWithoutComments.replace(/\$(\w+):\s*(.*?);/g, 'const $1 = $2;');
  
    // Convert SCSS mixins to JavaScript functions
    const jsSnippetWithMixins = jsSnippet.replace(/@mixin (\w+)\((.*?)\) {(.*?)};/gs, 'function $1($2) {$3}');
  
    // Convert SCSS class/selector definitions to JavaScript objects
    const jsSnippetWithClasses = jsSnippetWithMixins.replace(/(\.[\w-]+) {([^}]+)}/gs, '["$1"]: {$2}');
  
    // Convert SCSS parent selector references (&) to JavaScript string concatenation
    const jsSnippetWithParentSelector = jsSnippetWithClasses.replace(/&/g, '"+$1+"');
  
    // Wrap the JavaScript code in an IIFE (Immediately Invoked Function Expression)
    const wrappedJsSnippet = `(function() {${jsSnippetWithParentSelector}})();`;
  
    return wrappedJsSnippet;
}

console.log(convertScssToJs(`
.object-fit {
  object-fit: cover;
}`))
  