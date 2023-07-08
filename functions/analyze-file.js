const fs = require("fs");
const { targetAttributes } = require("../store");

function analyzeFile(filePath) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const fileExtension = filePath.split(".").pop();

    if (fileExtension === "jsx" || fileExtension === "tsx") {
        return extractClassNamesFromReactSyntax(fileContent);
    } else if (fileExtension === "html") {
        return extractClassNamesFromHTML(fileContent);
    }

    return [];
}

function extractClassNamesFromReactSyntax(fileContent) {
    const classAttributeRegex =
        /className=['"`]((?:[^'"`\r\n\\]|\\.|[\s\r\n])*)['"`]/g;
    const classNames = new Set();

    let match;

    while ((match = classAttributeRegex.exec(fileContent)) !== null) {
        // console.log({match: match[1]});
        const classNamesText = match[1];
        const classNamesArray = classNamesText.split(/\s+/); // Split by whitespace
        classNamesArray.forEach((className) => classNames.add(className));
    }

    return extractClassNamesFromDynamicReactSyntax(fileContent, classNames);
}

function extractClassNamesFromDynamicReactSyntax(
    fileContent,
    startingClassNames
) {
    const classNames = new Set(startingClassNames);

    let inClassName = false;
    let isClassNameStart = false;
    let withinBackTicks = false;
    let withinSingleQuotes = false;
    let withinDoubleQuotes = false;

    let delimeterPairs = {
        '"': '"',
        "'": "'",
        "`": "`",
        "{": "}",
    };

    const wordTerminators = ['"', "}", " ", "'", "`", "{", ","];
    let currentDelimeter;
    let openingDelimeters = 1;
    const classNameSets = {};
    let currentWord = "";
    let prevChar = "";
    let setId = 0;

    for (const char of fileContent) {
        if (inClassName) {
            if (isClassNameStart) {
                isClassNameStart = false;
                classNameSets[setId] = [];
                currentDelimeter = char;
            } else {
                if (["'", '"'].includes(currentDelimeter)) {
                    if (char == " ") {
                        const className = cleanUpClassName(currentWord);
                        className &&
                            classNameSets[setId].push(className) &&
                            classNames.add(className);
                        currentWord = "";
                    } else if (
                        char == delimeterPairs[currentDelimeter] &&
                        prevChar !== "\\"
                    ) {
                        const className = cleanUpClassName(currentWord);
                        className &&
                            classNameSets[setId].push(className) &&
                            classNames.add(className);

                        inClassName = false;
                        currentWord = "";
                    } else {
                        currentWord += char;
                    }
                } else if (currentDelimeter == "{") {
                    // could be variable, tenary, className, backtick
                    if (char == '"' && prevChar !== "\\") {
                        const className = cleanUpClassName(currentWord);
                        className &&
                            classNameSets[setId].push(className) &&
                            classNames.add(className);
                        currentWord = "";
                        withinDoubleQuotes = !withinDoubleQuotes;
                    } else if (char == "'" && prevChar !== "\\") {
                        const className = cleanUpClassName(currentWord);
                        className &&
                            classNameSets[setId].push(className) &&
                            classNames.add(className);
                        currentWord = "";
                        withinSingleQuotes = !withinSingleQuotes;
                    } else if (char == "`" && prevChar !== "\\") {
                        const className = cleanUpClassName(currentWord);
                        className &&
                            classNameSets[setId].push(className) &&
                            classNames.add(className);
                        currentWord = "";
                        withinBackTicks = !withinBackTicks;
                    } else {
                        if (withinBackTicks || withinSingleQuotes || withinDoubleQuotes) {
                            if (char == " ") {
                                const className = cleanUpClassName(currentWord);
                                className &&
                                    classNameSets[setId].push(className) &&
                                    classNames.add(className);
                                currentWord = "";
                            } else {
                                currentWord += char;
                            }
                        } else {
                            if (
                                char == delimeterPairs[currentDelimeter] &&
                                prevChar !== "\\"
                            ) {
                                if (openingDelimeters <= 1) {
                                    const className = cleanUpClassName(currentWord);
                                    className &&
                                        classNameSets[setId].push(className) &&
                                        classNames.add(className);
                                    inClassName = false;
                                    openingDelimeters = 1;
                                    currentWord = "";
                                } else {
                                    openingDelimeters--;
                                    const className = cleanUpClassName(currentWord);
                                    className &&
                                        classNameSets[setId].push(className) &&
                                        classNames.add(className);
                                    currentWord = "";
                                }
                            } else if (char == currentDelimeter) {
                                openingDelimeters++;
                            } else if (char == "(") {
                                currentWord = "";
                            } else if (char == ")") {
                                const className = cleanUpClassName(currentWord);
                                className &&
                                    classNameSets[setId].push(className) &&
                                    classNames.add(className);
                                currentWord = "";
                            } else {
                                if (openingDelimeters > 1) {
                                    currentWord += char;
                                } else {
                                    if (wordTerminators.includes(char)) {
                                        const className = cleanUpClassName(currentWord);
                                        className && targetAttributes.add(`${currentWord}=`);
                                        currentWord = "";
                                    } else {
                                        currentWord += char;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if (char == " ") {
                currentWord = "";
            } else {
                currentWord += char;
            }
        }

        // console.log(currentWord);

        if (targetAttributes.has(currentWord)) {
            //  console.log('Here:', targetAttributes.has(currentWord), {currentWord}, {targetAttributes} )
            inClassName = true;
            isClassNameStart = true;
            openingDelimeters = 1;
            currentWord = "";
            setId++;
        }

        prevChar = char;
    }

    // console.log({ classNameSets });
    return classNames;
}

function cleanUpClassName(className) {
    const startRegex = /^[a-zA-Z]+/;
    const endRegex = /[\w\d;!]+$/;
    let cleanedClassName = className.trim();

    while (
        !cleanedClassName.match(startRegex) ||
        !cleanedClassName.match(endRegex)
    ) {
        if (!cleanedClassName.match(startRegex)) {
            cleanedClassName = cleanedClassName.substring(1).trim();
        }
        if (!cleanedClassName.match(endRegex)) {
            cleanedClassName = cleanedClassName
                .substring(0, cleanedClassName.length - 1)
                .trim();
        }
        if (!cleanedClassName.length) {
            break;
        }
    }

    return cleanedClassName;
}

function extractClassNamesFromHTML(fileContent) {
    // HTML and Angular file analysis
    const classAttributeRegex =
        /class(?:=|\.)['"`]((?:[^'"`\r\n\\]|\\.|[\s\r\n])*)['"`]/g;
    const angularClassAttributeRegex =
        /\[class(?:\.([\w-]+))?]=['"`]((?:[^'"`\r\n\\]|\\.|[\s\r\n])*)['"`]/g;
    const rawHtmlClassAttributeRegex =
        /class=['"`]((?:[^'"`\r\n\\]|\\.|[\s\r\n])*)['"`]/g;
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

module.exports = analyzeFile;
