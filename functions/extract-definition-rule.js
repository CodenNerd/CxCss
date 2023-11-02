// function extractRules(inputString) {
//     const pattern = /{([^}]*?)}/gs; // Non-greedy match between curly braces with the 's' flag for multiline matching
//     const matches = inputString.match(pattern) || [];
//     console.log({matches})
//     const rules = matches.map(match => match.replaceAll(/[{}]/gs, '').trim()).join('').replace(/[;]$/, '').trim() + '; ';
//     return rules;
// }

function extractRules(inputString) {
    let lastOpenBraceIndex = -1;
    let firstCloseBraceIndex = -1;

    // Find the index of the last opening curly brace
    for (let i = inputString.length - 1; i >= 0; i--) {
        if (inputString[i] === '{') {
            lastOpenBraceIndex = i;
            break;
        }
    }

    // Find the index of the first closing curly brace after the last opening curly brace
    for (let i = lastOpenBraceIndex + 1; i < inputString.length; i++) {
        if (inputString[i] === '}') {
            firstCloseBraceIndex = i;
            break;
        }
    }

    if (lastOpenBraceIndex === -1 || firstCloseBraceIndex === -1) {
        return '';
    }

    const extractedContent = inputString.slice(lastOpenBraceIndex + 1, firstCloseBraceIndex).trim();
    return extractedContent?.replace(/[;]$/, '') + '; ';
}


module.exports = {
   extractRules
}
