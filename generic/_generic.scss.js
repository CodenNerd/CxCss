const fs = require('fs');
const path = require('path');

const colorsDefault = require('./colors.default');
const sizesDefault = require('./sizes.default');
const config = require('./scripts/config-reader');

const loopEnd = 200;
const loopStart = 0;

let classes = {};

for (let i = loopEnd; i >= loopStart; i--) {
  classes[`mt-${i}`] = `.mt-${i} { margin-top: ${i}px; }`;
  classes[`mb-${i}`] = `.mb-${i} { margin-bottom: ${i}px; }`;
  classes[`ml-${i}`] = `.ml-${i} { margin-left: ${i}px; }`;
  classes[`mr-${i}`] = `.mr-${i} { margin-right: ${i}px; }`;
  classes[`mx-${i}`] = `.mx-${i} { margin-left: ${i}px; margin-right: ${i}px; }`;
  classes[`my-${i}`] = `.my-${i} { margin-top: ${i}px; margin-bottom: ${i}px; }`;
  classes[`m-${i}`] = `.m-${i} { margin: ${i}px; }`;
  classes[`p-${i}`] = `.p-${i} { padding: ${i}px; }`;
  classes[`pt-${i}`] = `.pt-${i} { padding-top: ${i}px; }`;
  classes[`pb-${i}`] = `.pb-${i} { padding-bottom: ${i}px; }`;
  classes[`pl-${i}`] = `.pl-${i} { padding-left: ${i}px; }`;
  classes[`pr-${i}`] = `.pr-${i} { padding-right: ${i}px; }`;
  classes[`px-${i}`] = `.px-${i} { padding-left: ${i}px; padding-right: ${i}px; }`;
  classes[`py-${i}`] = `.py-${i} { padding-top: ${i}px; padding-bottom: ${i}px; }`;
  classes[`w-${i}`] = `.w-${i} { width: ${i}px; }`;
  classes[`w-${i + loopEnd}`] = `.w-${i + loopEnd} { width: ${i + loopEnd}px; }`;
  classes[`w-${i + loopEnd + loopEnd}`] = `.w-${i + loopEnd + loopEnd} { width: ${i + loopEnd + loopEnd}px; }`;
  classes[`w-${i}p`] = `.w-${i}p { width: ${i}%; }`;
  classes[`max-w-${i}p`] = `.max-w-${i}p { max-width: ${i}%; }`;
  classes[`min-w-${i}`] = `.min-w-${i} { min-width: ${i}px; }`;
  classes[`min-w-${i + loopEnd}`] = `.min-w-${i + loopEnd} { min-width: ${i + loopEnd}px; }`;
  classes[`min-w-${i + loopEnd + loopEnd}`] = `.min-w-${i + loopEnd + loopEnd} { min-width: ${i + loopEnd + loopEnd}px; }`;
  classes[`min-w-${i}p`] = `.min-w-${i}p { min-width: ${i}%; }`;
  classes[`h-${i}`] = `.h-${i} { height: ${i}px; }`;
  classes[`h-${i}p`] = `.h-${i}p { height: ${i}%; }`;
  classes[`t-${i}`] = `.t-${i} { top: ${i}px; }`;
  classes[`t-${i}p`] = `.t-${i}p { top: ${i}%; }`;
  classes[`b-${i}`] = `.b-${i} { bottom: ${i}px; }`;
  classes[`b-${i}p`] = `.b-${i}p { bottom: ${i}%; }`;
  classes[`l-${i}`] = `.l-${i} { left: ${i}px; }`;
  classes[`l-${i}p`] = `.l-${i}p { left: ${i}%; }`;
  classes[`r-${i}`] = `.r-${i} { right: ${i}px; }`;
  classes[`r-${i}p`] = `.r-${i}p { right: ${i}%; }`;
  classes[`z-index-${i}`] = `.z-index-${i}, .z-${i} { z-index: ${i}; }`;
  classes[`z-index--${i}`] = `.z-index--${i}, .z--${i} { z-index: -${i}; }`;
  classes[`grid-${i}-cols-auto`] = `.grid-${i}-cols-auto { grid-template-columns: repeat(${i}, auto); }`;
  classes[`grid-${i}-cols-1fr`] = `.grid-${i}-cols-1fr { grid-template-columns: repeat(${i}, 1fr); }`;
  classes[`grid-col-span-${i}`] = `.grid-col-span-${i} { grid-column: span ${i}; }`;
  classes[`gap-${i}`] = `.gap-${i} { gap: ${i}px; }`;
  classes[`border-radius-${i}`] = `.border-radius-${i}, .b-radius-${i}, .radius-${i} { border-radius: ${i}px; }`;
  classes[`border-b-r-${i}`] = `.border-b-r-${i} { border-bottom-right-radius: ${i}px; }`;
  classes[`border-b-l-${i}`] = `.border-b-l-${i} { border-bottom-left-radius: ${i}px; }`;
  classes[`radius-${i}`] = `.radius-${i} { border-radius: ${i}px; }`;
  classes[`border-${i}`] = `.border-${i} { border: ${i}px solid; }`;
  classes[`border-t-${i}`] = `.border-t-${i} { border-top: ${i}px solid; }`;
  classes[`border-b-${i}`] = `.border-b-${i} { border-bottom: ${i}px solid; }`;
  classes[`border-l-${i}`] = `.border-l-${i} { border-left: ${i}px solid; }`;
  classes[`border-r-${i}`] = `.border-r-${i} { border-right: ${i}px solid; }`;
  classes[`border-dash`] = `.border-dash { border-style: dashed; }`;
  classes[`line-height-${i}`] = `.line-height-${i} { line-height: ${i}px; }`;
  classes[`rotate-x-${i}`] = `.rotate-x-${i} { transform: rotateX(${i}deg); }`;
  classes[`rotate-x--${i}`] = `.rotate-x--${i} { transform: rotateX(-${i}deg); }`;
  classes[`rotate-y-${i}`] = `.rotate-y-${i} { transform: rotateY(${i}deg); }`;
  classes[`rotate-y--${i}`] = `.rotate-y--${i} { transform: rotateY(-${i}deg); }`;
  classes[`rotate-z-${i}`] = `.rotate-z-${i} { transform: rotateZ(${i}deg); }`;
  classes[`rotate-z--${i}`] = `.rotate-z--${i} { transform: rotateZ(-${i}deg); }`;
  classes[`opacity-${i}`] = `.opacity-${i} { opacity: ${i}%; }`;

  for (let j = 1; j <= 5; j++) {
    const value = i * j;
    classes[`aspect-ratio-${i}-${value}`] = `.aspect-ratio-${i}-${value}, .ratio-${i}-${value} { aspect-ratio: ${i} / calc(${i} * ${value}); }`;
  }

  /** {{breakpoint_end}} **/
}

for (let i = 0; i <= 800; i++) {
  /** {{breakpoint_start}} **/
  classes[`h-${i}vh`] = `.h-${i}vh { height: ${i}vh; }`;
  classes[`max-h-${i}vh`] = `.max-h-${i}vh { max-height: ${i}vh; }`;
  classes[`min-h-${i}vh`] = `.min-h-${i}vh { min-height: ${i}vh; }`;
  classes[`max-w-${i}`] = `.max-w-${i} { max-width: ${i}px; }`;
  classes[`text-${i}`] = `.text-${i} { font-size: ${i}px; }`;
  /** {{breakpoint_end}} **/
}

/** {{breakpoint_start}} **/

for (let i = 1; i <= 9; i++) {
  const value = i * 100;
  classes[`weight-${value}`] = `.weight-${value} { font-weight: ${value}; }`;
}


/* {{breakpoint_start}} */
classes = {
  ...classes,
  'w-fit': `.w-fit {
    width: fit-content;
  }`,
  'h-fit': `.h-fit {
    height: fit-content;
  }`,
  'p-absolute': `.absolute {
    position: absolute;
  }`,
  'p-relative': `.relative {
    position: relative;
  }`,
  'p-fixed': `.fixed {
    position: fixed;
  }`,
  'p-static': `.static {
    position: static;
  }`,
  'p-sticky': `.sticky {
    position: sticky;
  }`,
  'mx-auto': `.mx-auto {
    margin-left: auto;
    margin-right: auto;
  }`,
  'border-none': `.border-none {
    border: none;
  }`,
  bold: `.bold {
    font-weight: bold;
  }`,
  bolder: `.bolder {
    font-weight: bolder;
  }`,
  light: `.light {
    font-weight: light;
  }`,
  lighter: `.lighter {
    font-weight: lighter;
  }`,
  'text-right': `.text-right {
    text-align: right;
  }`,
  'text-center': `.text-center {
    text-align: center;
  }`,
  'text-left': `.text-left {
    text-align: left;
  }`,
  pointer: `.pointer {
    cursor: pointer;
  }`,
  'text-largest': `.text-largest {
    font-size: ${sizesDefault.largest};
  }`,
  'text-larger': `.text-larger {
    font-size: ${sizesDefault.larger};
  }`,
  'text-large': `.text-large {
    font-size: ${sizesDefault.large};
  }`,
  'text-medium': `.text-medium {
    font-size: ${sizesDefault.medium};
  }`,
  'text-small': `.text-small {
    font-size: ${sizesDefault.small};
  }`,
  'text-smaller': `.text-smaller {
    font-size: ${sizesDefault.smaller};
  }`,
  'block': `.block {
    display: block;
  }`,
  'inline-block': `.inline-block {
    display: inline-block;
  }`,
  'inline': `.inline {
    display: inline;
  }`,
  'hidden': `.hidden {
    display: none;
  }`,
  'grid': `.grid {
    display: grid;
  }`,
  'flex': `.flex {
    display: flex;
  }`,
  'inline-flex': `.inline-flex {
    display: inline-flex;
  }`,
  'flex-col': `.flex-col {
    flex-direction: column;
  }`,
  'flex-row': `.flex-row {
    flex-direction: row;
  }`,
  'float-right': `.float-right {
    float: right;
  }`,
  'float-left': `.float-left {
    float: left;
  }`,
  'j-content-space-between': `.j-content-space-between {
    justify-content: space-between;
  }`,
  'j-content-center': `.j-content-center {
    justify-content: center;
  }`,
  'a-items-center': `.a-items-center {
    align-items: center;
  }`,
  'a-items-baseline': `.a-items-baseline {
    align-items: baseline;
  }`,
  'a-items-start': `.a-items-start {
    align-items: flex-start;
  }`,
  'content-end': `.content-end {
    justify-content: flex-end;
    align-content: flex-end;
  }`,
  'overflow-hidden': `.overflow-hidden {
    overflow: hidden;
  }`,
  'scroll-y': `.scroll-y {
    overflow-y: scroll;
  }`,
  'no-scrollbar': `.no-scrollbar {
    &::-webkit-scrollbar {
      width: 0px;
    }
  }`,
  'bg-success': `.bg-success {
    background-color: ${colorsDefault.success};
  }`,
  'bg-danger': `.bg-danger {
    background-color: ${colorsDefault.danger};
  }`,
  'text-danger': `.text-danger {
    color: ${colorsDefault.danger};
  }`,
  'bg-warning': `.bg-warning {
    background-color: ${colorsDefault.warning};
  }`,
  'bg-info': `.bg-info {
    background-color: ${colorsDefault.info};
  }`,
  'bg-none': `.bg-none {
    background-color: initial;
  }`,
  uppercase: `.uppercase {
    text-transform: uppercase;
  }`,
  lowercase: `.lowercase {
    text-transform: lowercase;
  }`,
  capitalize: `.capitalize {
    text-transform: capitalize;
  }`,
  'sentence-case': `.sentence-case {
    text-transform: lowercase;
  }
  .sentence-case:first-letter {
    text-transform: uppercase;
  }`,
  'whitespace-nowrap': `.whitespace-nowrap {
    white-space: nowrap;
  }`,
  'object-fit': `.object-fit {
    object-fit: cover;
  }`,
  round: `.round {
    border-radius: 50%;
  }`,
  'box-shadow': `.box-shadow {
    box-shadow: 0px 6px 12px rgba(4, 9, 33, 0.08);
  }`,
  'w-full': `.w-full {
    width: 100%;
  }`,
  'h-full': `.h-full {
    height: 100%;
  }`,
};


const cacheFolder = config.location + '/classes.cache';

// Create the cache folder if it doesn't exist
if (!fs.existsSync(cacheFolder)) {
  fs.mkdirSync(cacheFolder);
}

for (const key in classes) {
  const cleanedKey = key.replaceAll(/\n/g, '');
  const cleanedValue = classes[key].replaceAll(/\n/g, '');
   console.log({ cleanedKey, cleanedValue });
 const firstLetter = cleanedKey.charAt(0).toLowerCase();
  const fileName = `${firstLetter}.cache.json`;
  const filePath = path.join(cacheFolder, fileName);

  let fileContent = {};
  if (fs.existsSync(filePath)) {
    const existingContent = fs.readFileSync(filePath, 'utf8');

    if (existingContent) {
      try {
        fileContent = JSON.parse(existingContent);
      } catch (err) {
        console.error(`Error parsing JSON in ${fileName}:`, err);
        continue;
      }
    }
  }

  fileContent[cleanedKey] = cleanedValue;

  fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
}






