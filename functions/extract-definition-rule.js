function extractRules(inputString) {
    const pattern = /{([^}]*?)}/gs; // Non-greedy match between curly braces with the 's' flag for multiline matching
    const matches = inputString.match(pattern) || [];
    const rules = matches.map(match => match.replaceAll(/[{};]/gs, '')).join('; ').trim() + '; '
    console.log({inputString, matches, rules});
    return rules;
}

module.exports = {
   extractRules
}
