const digitPattern = '(\\d+)' 
const colorPattern = '(\\#?[\\d\\w]+|\\w+\\(.+\\))'

const classPatterns = {
  [`^mt-${digitPattern}$`]: '.mt-$1 { margin-top: $1px; }',
  [`^mb-${digitPattern}$`]: '.mb-$1 { margin-bottom: $1px; }',
  [`^ml-${digitPattern}$`]: '.ml-$1 { margin-left: $1px; }',
  [`^mr-${digitPattern}$`]: '.mr-$1 { margin-right: $1px; }',
  [`^mx-${digitPattern}$`]: '.mx-$1 { margin-left: $1px; margin-right: $1px; }',
  [`^my-${digitPattern}$`]: '.my-$1 { margin-top: $1px; margin-bottom: $1px; }',
  [`^m-${digitPattern}$`]: '.m-$1 { margin: $1px; }',
  [`^p-${digitPattern}$`]: '.p-$1 { padding: $1px; }',
  [`^pt-${digitPattern}$`]: '.pt-$1 { padding-top: $1px; }',
  [`^pb-${digitPattern}$`]: '.pb-$1 { padding-bottom: $1px; }',
  [`^pl-${digitPattern}$`]: '.pl-$1 { padding-left: $1px; }',
  [`^pr-${digitPattern}$`]: '.pr-$1 { padding-right: $1px; }',
  [`^px-${digitPattern}$`]: '.px-$1 { padding-left: $1px; padding-right: $1px; }',
  [`^py-${digitPattern}$`]: '.py-$1 { padding-top: $1px; padding-bottom: $1px; }',
  [`^w-${digitPattern}$`]: '.w-$1 { width: $1px; }',
  [`^w-${digitPattern}(p)$`]: '.w-$1p { width: $1%; }',
  [`^max-w-${digitPattern}(p)$`]: '.max-w-$1p { max-width: $1%; }',
  [`^min-w-${digitPattern}$`]: '.min-w-$1 { min-width: $1px; }',
  [`^min-w-${digitPattern}(p)$`]: '.min-w-$1p { min-width: $1%; }',
  [`^h-${digitPattern}$`]: '.h-$1 { height: $1px; }',
  [`^h-${digitPattern}(p)$`]: '.h-$1p { height: $1%; }',
  [`^t-${digitPattern}$`]: '.t-$1 { top: $1px; }',
  [`^t-${digitPattern}(p)$`]: '.t-$1p { top: $1%; }',
  [`^b-${digitPattern}$`]: '.b-$1 { bottom: $1px; }',
  [`^b-${digitPattern}(p)$`]: '.b-$1p { bottom: $1%; }',
  [`^l-${digitPattern}$`]: '.l-$1 { left: $1px; }',
  [`^l-${digitPattern}(p)$`]: '.l-$1p { left: $1%; }',
  [`^r-${digitPattern}$`]: '.r-$1 { right: $1px; }',
  [`^r-${digitPattern}(p)$`]: '.r-$1p { right: $1%; }',
  [`^z-index-${digitPattern}$`]: '.z-index-$1, .z-$1 { z-index: $1; }',
  [`^z-index--${digitPattern}$`]: '.z-index--$1, .z--$1 { z-index: -$1; }',
  [`^grid-${digitPattern}-cols-auto$`]: '.grid-$1-cols-auto { grid-template-columns: repeat($1, auto); }',
  [`^grid-${digitPattern}-cols-1fr$`]: '.grid-$1-cols-1fr { grid-template-columns: repeat($1, 1fr); }',
  [`^grid-col-span-${digitPattern}$`]: '.grid-col-span-$1 { grid-column: span $1; }',
  [`^gap-${digitPattern}$`]: '.gap-$1 { gap: $1; }',
  [`^radius-${digitPattern}$`]: '.radius-$1 { border-radius: $1; }',
  [`^radius-t-r-${digitPattern}$`]: '.radius-t-r-$1 { border-top-right-radius: $1  }',
  [`^radius-t-l-${digitPattern}$`]: '.radius-t-l-$1 { border-top-left-radius: $1  }',
  [`^radius-b-r-${digitPattern}$`]: '.radius-b-r-$1 { border-bottom-right-radius: $1  }',
  [`^radius-b-l-${digitPattern}$`]: '.radius-b-l-$1 { border-bottom-left-radius: $1  }',
  [`^border-${digitPattern}$`]: '.border-$1 { border-width: $1px; }',
  [`^border-t-${digitPattern}$`]: '.border-t-$1 { border-top-width: $1px; }',
  [`^border-b-${digitPattern}$`]: '.border-b-$1 { border-bottom-width: $1px; }',
  [`^border-l-${digitPattern}$`]: '.border-l-$1 { border-left-width: $1px; }',
  [`^border-r-${digitPattern}$`]: '.border-r-$1 { border-right-width: $1px; }',
  [`^border-x-${digitPattern}$`]: '.border-x-$1 { border-left-width: $1px; border-right-width: $1px;}',
  [`^border-y-${digitPattern}$`]: '.border-y-$1 { border-top-width: $1px; border-bottom-width: $1px;}',
  [`^outline-${digitPattern}$`]: '.outline-$1 { outline-width: $1px; }',
  [`^outline-offset-${digitPattern}$`]: '.outline-offset-$1 { outline-offset: $1px; }',
  [`^line-height-${digitPattern}$`]: '.line-height-$1 { line-height: $1px; }',
  [`^rotate-x-${digitPattern}$`]: '.rotate-x-$1 { transform: rotateX($1deg); }',
  [`^rotate-x--${digitPattern}$`]: '.rotate-x--$1 { transform: rotateX(-$1deg); }',
  [`^rotate-y-${digitPattern}$`]: '.rotate-y-$1 { transform: rotateY($1deg); }',
  [`^rotate-y--${digitPattern}$`]: '.rotate-y--$1 { transform: rotateY(-$1deg); }',
  [`^rotate-z-${digitPattern}$`]: '.rotate-z-$1 { transform: rotateZ($1deg); }',
  [`^rotate-z--${digitPattern}$`]: '.rotate-z--$1 { transform: rotateZ(-$1deg); }',
  [`^opacity-${digitPattern}$`]: '.opacity-$1 { opacity: $1%; }',
  [`^h-${digitPattern}vh$`]: '.h-$1vh { height: $1vh; }',
  [`^max-h-${digitPattern}vh$`]: '.max-h-$1vh { max-height: $1vh; }',
  [`^min-h-${digitPattern}vh$`]: '.min-h-$1vh { min-height: $1vh; }',
  [`^max-w-${digitPattern}$`]: '.max-w-$1 { max-width: $1px; }',
  [`^text-${digitPattern}$`]: '.text-$1 { font-size: $1px; }',
  [`^ratio-${digitPattern}/${digitPattern}$`]: '.ratio-$1/$2 { aspect-ratio: $1/$2; }',
  [`^ratio-${digitPattern}$`]: '.ratio-$1 { aspect-ratio: $1; }',
  [`^block-size-${digitPattern}$`]: '.block-size-$1 { block-size: $1px; }',
  [`^color-${colorPattern}$`]: ".color-$1 { color: $1; }",
  [`^bg-${colorPattern}$`]: ".bg-$1 { background-color: $1; }",
  [`^border-${colorPattern}$`]: ".border-$1 { border-color: $1; }",
  [`^accent-${colorPattern}$`]: ".accent-\\$1 { accent-color: $1; }",
  // '((?:blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|sepia|saturate)-[^|]+)': '.$1 { backdrop-filter:  }'

  '^blur-(\\d+%?)$': '.blur-$1 { backdrop-filter: blur($1); }',
  '^brightness-(\\d+%?)$': '.brightness-$1 { backdrop-filter: brightness($1); }',
  '^contrast-(\\d+%?)$': '.contrast-$1 { backdrop-filter: contrast($1); }',
  '^drop-shadow\\((.+)\\)$': '.drop-shadow-$1 { backdrop-filter: drop-shadow($1); }',
  '^grayscale-(\\d+%?)$': '.grayscale-$1 { backdrop-filter: grayscale($1); }',
  '^hue-rotate-(\\d+deg)$': '.hue-rotate-$1 { backdrop-filter: hue-rotate($1); }',
  '^invert-(\\d+%?)$': '.invert-$1 { backdrop-filter: invert($1); }',
  '^backdrop-opacity-(\\d+%?)$': '.backdrop-opacity-$1 { backdrop-filter: opacity($1); }',
  '^sepia-(\\d+%?)$': '.sepia-$1 { backdrop-filter: sepia($1); }',
  '^saturate-(\\d+%?)$': '.saturate-$1 { backdrop-filter: saturate($1); }',


  [`^border-block-${digitPattern}$`]: '.border-block-$1 { border-block-width: $1px; }',
  [`^border-block-${colorPattern}$`]: '.border-block-$1 { border-block-color: $1; }',


  [`^clip-circle-${digitPattern}$`]: ".clip-circle-$1 { clip-path: circle($1px); }",
  [`^clip-circle-${digitPattern}p$`]: ".clip-circle-$1p { clip-path: circle($1%); }",

  [`^shadow-${digitPattern}-${digitPattern}-${digitPattern}-${digitPattern}-${colorPattern}$`]: ".shadow-$1-$2-$3-$4-$5 { box-shadow: $1px $2px $3px $4px $5; }",








};

/***
 * TODO:
 * 
 * - optimise backdrop filter to return a single definition when used in the same classname
 */

module.exports = {classPatterns};
