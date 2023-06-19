const fs = require('fs')


function analyzeFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const fileExtension = filePath.split('.').pop();
  
    if (fileExtension === 'jsx' || fileExtension === 'tsx') {
        return extractClassNamesFromReactSyntax(fileContent)
    }
    else if (fileExtension === 'html') {
        return extractClassNamesFromHTML(fileContent)
    }

    return [];
}

function extractClassNamesFromReactSyntax(fileContent) {
    const classAttributeRegex = /className=['"`]((?:[^'"`\r\n\\]|\\.|[\s\r\n])*)['"`]/g;
    const classNames = new Set();

    let match;

    while ((match = classAttributeRegex.exec(fileContent)) !== null) {
    // console.log({match: match[1]});
    const classNamesText = match[1];
    const classNamesArray = classNamesText.split(/\s+/); // Split by whitespace
    classNamesArray.forEach(className => classNames.add(className));
    }

    return classNames;
}

function extractClassNamesFromHTML(fileContent) {
    // HTML and Angular file analysis
    const classAttributeRegex = /class(?:=|\.)['"`]((?:[^'"`\r\n\\]|\\.|[\s\r\n])*)['"`]/g;
    const angularClassAttributeRegex = /\[class(?:\.([\w-]+))?]=['"`]((?:[^'"`\r\n\\]|\\.|[\s\r\n])*)['"`]/g;
    const rawHtmlClassAttributeRegex = /class=['"`]((?:[^'"`\r\n\\]|\\.|[\s\r\n])*)['"`]/g;
    const classNames = new Set();

    let match;
    
    while ((match = classAttributeRegex.exec(fileContent)) !== null) {
        const classNamesText = match[1];
        const classNamesArray = classNamesText.split(/\s+/);
        classNamesArray.forEach((className) => classNames.add(className));
    }
    
    while ((match = angularClassAttributeRegex.exec(fileContent)) !== null) {
        const classNamesText = match[2];
        const classNamesArray = classNamesText.split(/\s+/);
        classNamesArray.forEach((className) => classNames.add(className));
    }
    
    while ((match = rawHtmlClassAttributeRegex.exec(fileContent)) !== null) {
        const classNamesText = match[1];
        const classNamesArray = classNamesText.split(/\s+/);
        classNamesArray.forEach((className) => classNames.add(className));
    }

    return classNames;
}



module.exports = analyzeFile
