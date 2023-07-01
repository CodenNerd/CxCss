const fs = require('fs');
const path = require('path');

const colorsDefault = require('../colors.default');
const sizesDefault = require('../sizes.default');

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
  // classes[`border-radius-${i}`] = `.border-radius-${i}, .b-radius-${i}, .radius-${i} { border-radius: ${i}px; }`;
  // classes[`border-b-r-${i}`] = `.border-b-r-${i} { border-bottom-right-radius: ${i}px; }`;
  // classes[`border-b-l-${i}`] = `.border-b-l-${i} { border-bottom-left-radius: ${i}px; }`;
  // classes[`radius-${i}`] = `.radius-${i} { border-radius: ${i}px; }`;
  // classes[`border-${i}`] = `.border-${i} { border: ${i}px solid; }`;
  // classes[`border-t-${i}`] = `.border-t-${i} { border-top: ${i}px solid; }`;
  // classes[`border-b-${i}`] = `.border-b-${i} { border-bottom: ${i}px solid; }`;
  // classes[`border-l-${i}`] = `.border-l-${i} { border-left: ${i}px solid; }`;
  // classes[`border-r-${i}`] = `.border-r-${i} { border-right: ${i}px solid; }`;
  // classes[`border-dash`] = `.border-dash { border-style: dashed; }`;
  classes[`line-height-${i}`] = `.line-height-${i} { line-height: ${i}px; }`;
  classes[`rotate-x-${i}`] = `.rotate-x-${i} { transform: rotateX(${i}deg); }`;
  classes[`rotate-x--${i}`] = `.rotate-x--${i} { transform: rotateX(-${i}deg); }`;
  classes[`rotate-y-${i}`] = `.rotate-y-${i} { transform: rotateY(${i}deg); }`;
  classes[`rotate-y--${i}`] = `.rotate-y--${i} { transform: rotateY(-${i}deg); }`;
  classes[`rotate-z-${i}`] = `.rotate-z-${i} { transform: rotateZ(${i}deg); }`;
  classes[`rotate-z--${i}`] = `.rotate-z--${i} { transform: rotateZ(-${i}deg); }`;
  classes[`opacity-${i}`] = `.opacity-${i} { opacity: ${i}%; }`;

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
  'absolute': `.absolute {
    position: absolute;
  }`,
  'relative': `.relative {
    position: relative;
  }`,
  'fixed': `.fixed {
    position: fixed;
  }`,
  'static': `.static {
    position: static;
  }`,
  'sticky': `.sticky {
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
  'space-between': `.space-between {
    justify-content: space-between;
  }`,
  'j-content-between': `.j-content-between {
    justify-content: space-between;
  }`,
  'j-content-center': `.j-content-center {
    justify-content: center;
  }`,
  'items-center': `.items-center {
    align-items: center;
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
  'scroll-x': `.scroll-y {
    overflow-x: scroll;
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

  'border': `.border { 
    border: 1px solid; 
  }`,
  'border-dashed': '.border-dashed { border-style: dashed; }',
  'border-dotted': '.border-dotted { border-style: dotted; }',
  'border-double': '.border-double { border-style: double; }',
  'border-none': '.border-none { border-style: none; }',
  'border-solid': '.border-solid { border-style: solid; }',
  'border-inset': '.border-inset { border-style: inset; }',
  'border-outset': '.border-outset { border-style: outset; }',
  'border-hidden': '.border-hidden { border-style: hidden; }',
  'border-ridge': '.border-ridge { border-style: ridge; }',
  'border-groove': '.border-groove { border-style: groove; }',

  'outline-none': `.outline-none {
    outline: none;
  }`,  
  'outline': '.outline { outline: 1px solid; }',
  'outline-dotted': '.outline-dotted { outline-style: dotted; }',
  'outline-dashed': '.outline-dashed { outline-style: dashed; }',
  'outline-double': '.outline-double { outline-style: double; }',
  'outline-solid': '.outline-solid { outline-style: solid; }',
  'outline-inset': '.outline-inset { outline-style: inset; }',
  'outline-outset': '.outline-outset { outline-style: outset; }',
  'outline-ridge': '.outline-ridge { outline-style: ridge; }',
  'outline-groove': '.outline-groove { outline-style: groove; }',


  'a-content-initial': '.a-content-initial { align-content: initial; }',
  'a-content-inherit': '.a-content-inherit { align-content: inherit; }',
  'a-items-initial': '.a-items-initial { align-items: initial; }',
  'a-items-inherit': '.a-items-inherit { align-items: inherit; }',
  'a-self-initial': '.a-self-initial { align-self: initial; }',
  'a-self-inherit': '.a-self-inherit { align-self: inherit; }',
  'a-content-center': '.a-content-center { align-content: center; }',
  'a-content-flex-start': '.a-content-flex-start { align-content: flex-start; }',
  'a-content-flex-end': '.a-content-flex-end { align-content: flex-end; }',
  'a-content-stretch': '.a-content-stretch { align-content: stretch; }',
  'a-content-between': '.a-content-between { align-content: space-between; }',
  'a-content-around': '.a-content-around { align-content: space-around; }',
  'a-content-evenly': '.a-content-evenly { align-content: space-evenly; }',
  'a-items-start': '.a-items-start { align-items: flex-start; }',
  'a-items-end': '.a-items-end { align-items: flex-end; }',
  'a-items-center': '.a-items-center { align-items: center; }',
  'a-items-baseline': '.a-items-baseline { align-items: baseline; }',
  'a-items-stretch': '.a-items-stretch { align-items: stretch; }',
  'a-self-auto': '.a-self-auto { align-self: auto; }',
  'a-self-start': '.a-self-start { align-self: flex-start; }',
  'a-self-end': '.a-self-end { align-self: flex-end; }',
  'a-self-center': '.a-self-center { align-self: center; }',
  'a-self-baseline': '.a-self-baseline { align-self: baseline; }',
  'a-self-stretch': '.a-self-stretch { align-self: stretch; }',

  'j-content-initial': '.j-content-initial { justify-content: initial; }',
  'j-content-inherit': '.j-content-inherit { justify-content: inherit; }',
  'j-items-initial': '.j-items-initial { justify-items: initial; }',
  'j-items-inherit': '.j-items-inherit { justify-items: inherit; }',
  'j-self-initial': '.j-self-initial { justify-self: initial; }',
  'j-self-inherit': '.j-self-inherit { justify-self: inherit; }',
  'j-content-start': '.j-content-start { justify-content: flex-start; }',
  'j-content-end': '.j-content-end { justify-content: flex-end; }',
  'j-content-center': '.j-content-center { justify-content: center; }',
  'j-content-between': '.j-content-between { justify-content: space-between; }',
  'j-content-around': '.j-content-around { justify-content: space-around; }',
  'j-content-evenly': '.j-content-evenly { justify-content: space-evenly; }',
  'j-items-start': '.j-items-start { justify-items: flex-start; }',
  'j-items-end': '.j-items-end { justify-items: flex-end; }',
  'j-items-center': '.j-items-center { justify-items: center; }',
  'j-items-baseline': '.j-items-baseline { justify-items: baseline; }',
  'j-items-stretch': '.j-items-stretch { justify-items: stretch; }',
  'j-self-auto': '.j-self-auto { justify-self: auto; }',
  'j-self-start': '.j-self-start { justify-self: flex-start; }',
  'j-self-end': '.j-self-end { justify-self: flex-end; }',
  'j-self-center': '.j-self-center { justify-self: center; }',
  'j-self-baseline': '.j-self-baseline { justify-self: baseline; }',
  'j-self-stretch': '.j-self-stretch { justify-self: stretch; }',

  'all-initial': '.all-initial { all: initial; }',
  'all-inherit': '.all-inherit { all: inherit; }',
  'all-unset': '.all-unset { all: unset; }',
  'all-revert': '.all-revert { all: revert; }',
  'all-auto': '.all-auto { all: auto; }',
  'all-unset': '.all-unset { all: unset; }',
  'all-inherit': '.all-inherit { all: inherit; }',
  'all-revert': '.all-revert { all: revert; }',
  'all-none': '.all-none { all: none; }',


  'backface-visible': '.backface-visible { backface-visibility: visible; }',
  'backface-hidden': '.backface-hidden { backface-visibility: hidden; }',
  'backface-initial': '.backface-initial { backface-visibility: initial; }',
  'backface-inherit': '.backface-inherit { backface-visibility: inherit; }',


  'border-block-none': '.border-block-none { border-block-style: none; }',
  'border-block-solid': '.border-block-solid { border-block-style: solid; }',
  'border-block-double': '.border-block-double { border-block-style: double; }',
  'border-block-dotted': '.border-block-dotted { border-block-style: dotted; }',
  'border-block-dashed': '.border-block-dashed { border-block-style: dashed; }',

  'border-collapse-separate': '.border-collapse-separate { border-collapse: separate; }',
  'border-collapse-collapse': '.border-collapse-collapse { border-collapse: collapse; }',
  'border-collapse-initial': '.border-collapse-initial { border-collapse: initial; }',
  'border-collapse-inherit': '.border-collapse-inherit { border-collapse: inherit; }',

  // 'radius-yy-initial': '.radius-yy-initial { border-end-end-radius: initial; }',
  // 'radius-yy-inherit': '.radius-yy-inherit { border-end-end-radius: inherit; }',

  'cursor-alias': '.cursor-alias { cursor: alias; }',
  'cursor-all-scroll': '.cursor-all-scroll { cursor: all-scroll; }',
  'cursor-auto': '.cursor-auto { cursor: auto; }',
  'cursor-cell': '.cursor-cell { cursor: cell; }',
  'cursor-col-resize': '.cursor-col-resize { cursor: col-resize; }',
  'cursor-context-menu': '.cursor-context-menu { cursor: context-menu; }',
  'cursor-copy': '.cursor-copy { cursor: copy; }',
  'cursor-crosshair': '.cursor-crosshair { cursor: crosshair; }',
  'cursor-default': '.cursor-default { cursor: default; }',
  'cursor-e-resize': '.cursor-e-resize { cursor: e-resize; }',
  'cursor-ew-resize': '.cursor-ew-resize { cursor: ew-resize; }',
  'cursor-grab': '.cursor-grab { cursor: grab; }',
  'cursor-grabbing': '.cursor-grabbing { cursor: grabbing; }',
  'cursor-help': '.cursor-help { cursor: help; }',
  'cursor-move': '.cursor-move { cursor: move; }',
  'cursor-n-resize': '.cursor-n-resize { cursor: n-resize; }',
  'cursor-ne-resize': '.cursor-ne-resize { cursor: ne-resize; }',
  'cursor-nesw-resize': '.cursor-nesw-resize { cursor: nesw-resize; }',
  'cursor-ns-resize': '.cursor-ns-resize { cursor: ns-resize; }',
  'cursor-nw-resize': '.cursor-nw-resize { cursor: nw-resize; }',
  'cursor-nwse-resize': '.cursor-nwse-resize { cursor: nwse-resize; }',
  'cursor-no-drop': '.cursor-no-drop { cursor: no-drop; }',
  'cursor-none': '.cursor-none { cursor: none; }',
  'cursor-not-allowed': '.cursor-not-allowed { cursor: not-allowed; }',
  'cursor-pointer': '.cursor-pointer { cursor: pointer; }',
  'cursor-progress': '.cursor-progress { cursor: progress; }',
  'cursor-row-resize': '.cursor-row-resize { cursor: row-resize; }',
  'cursor-s-resize': '.cursor-s-resize { cursor: s-resize; }',
  'cursor-se-resize': '.cursor-se-resize { cursor: se-resize; }',
  'cursor-sw-resize': '.cursor-sw-resize { cursor: sw-resize; }',
  'cursor-text': '.cursor-text { cursor: text; }',
  'cursor-url': '.cursor-url { cursor: url(myBall.cur), auto; }',
  'cursor-w-resize': '.cursor-w-resize { cursor: w-resize; }',
  'cursor-wait': '.cursor-wait { cursor: wait; }',
  'cursor-zoom-in': '.cursor-zoom-in { cursor: zoom-in; }',
  'cursor-zoom-out': '.cursor-zoom-out { cursor: zoom-out; }',

  'font-italic': '.font-italic {font-style: italic; }',
  'font-normal': '.font-normal {font-style: normal; }',
  'font-oblique': '.font-oblique {font-style: oblique; }',

  'break-inside-auto': '.break-inside-auto { break-inside: auto; }',
  'break-inside-avoid': '.break-inside-avoid { break-inside: avoid; }',
  'break-inside-avoid-page': '.break-inside-avoid-page { break-inside: avoid-page; }',
  'break-inside-avoid-column': '.break-inside-avoid-column { break-inside: avoid-column; }',


  'caption-side-top': '.caption-side-top { caption-side: top; }',
  'caption-side-bottom': '.caption-side-bottom { caption-side: bottom; }',

  'clear-none': '.clear-none { clear: none; }',
  'clear-left': '.clear-left { clear: left; }',
  'clear-right': '.clear-right { clear: right; }',
  'clear-both': '.clear-both { clear: both; }',
  'clear-inline-start': '.clear-inline-start { clear: inline-start; }',
  'clear-inline-end': '.clear-inline-end { clear: inline-end; }',

  'column-fill-auto': '.column-fill-auto { column-fill: auto; }',
  'column-fill-balance': '.column-fill-balance { column-fill: balance; }',

  'column-rule-none': '.column-rule-none { column-rule-style: none; }',
  'column-rule-hidden': '.column-rule-hidden { column-rule-style: hidden; }',
  'column-rule-dotted': '.column-rule-dotted { column-rule-style: dotted; }',
  'column-rule-dashed': '.column-rule-dashed { column-rule-style: dashed; }',
  'column-rule-solid': '.column-rule-solid { column-rule-style: solid; }',
  'column-rule-double': '.column-rule-double { column-rule-style: double; }',
  'column-rule-groove': '.column-rule-groove { column-rule-style: groove; }',
  'column-rule-ridge': '.column-rule-ridge { column-rule-style: ridge; }',
  'column-rule-inset': '.column-rule-inset { column-rule-style: inset; }',
  'column-rule-outset': '.column-rule-outset { column-rule-style: outset; }',

  'column-span-none': '.column-span-none { column-span: none; }',
  'column-span-all': '.column-span-all { column-span: all; }',

  'direction-ltr': '.direction-ltr { direction: ltr; }',
  'direction-rtl': '.direction-rtl { direction: rtl; }',

  'empty-cells-show': '.empty-cells-show { empty-cells: show; }',
  'empty-cells-hide': '.empty-cells-hide { empty-cells: hide; }',


  'list-none': '.list-none { list-style-type: none; }',
  'list-disc': '.list-disc { list-style-type: disc; }',
  'list-circle': '.list-circle { list-style-type: circle; }',
  'list-square': '.list-square { list-style-type: square; }',
  'list-decimal': '.list-decimal { list-style-type: decimal; }',
  'list-decimal-leading-zero': '.list-type-decimal-leading-zero { list-style-type: decimal-leading-zero; }',
  'list-lower-roman': '.list-lower-roman { list-style-type: lower-roman; }',
  'list-upper-roman': '.list-upper-roman { list-style-type: upper-roman; }',
  'list-lower-alpha': '.list-lower-alpha { list-style-type: lower-alpha; }',
  'list-upper-alpha': '.list-upper-alpha { list-style-type: upper-alpha; }',
  'list-lower-greek': '.list-lower-greek { list-style-type: lower-greek; }',
  'list-lower-latin': '.list-lower-latin { list-style-type: lower-latin; }',
  'list-upper-latin': '.list-upper-latin { list-style-type: upper-latin; }',
  'list-disclosure-closed': '.list-disclosure-closed { list-style-type: disclosure-closed; }',
  'list-disclosure-open': '.list-disclosure-open { list-style-type: disclosure-open; }',

  'list-inside': 'list-inside { list-style-position: inside; }',
  'list-outside': 'list-outside { list-style-position: outside; }',

  'object-fit-fill': '.object-fit-fill { object-fit: fill; }',
  'object-fit-contain': '.object-fit-contain { object-fit: contain; }',
  'object-fit-cover': '.object-fit-cover { object-fit: cover; }',
  'object-fit-none': '.object-fit-none { object-fit: none; }',
  'object-fit-scale-down': '.object-fit-scale-down { object-fit: scale-down; }',

  'outline-style-none': '.outline-style-none { outline-style: none; }',
  'outline-style-dotted': '.outline-style-dotted { outline-style: dotted; }',
  'outline-style-dashed': '.outline-style-dashed { outline-style: dashed; }',
  'outline-style-solid': '.outline-style-solid { outline-style: solid; }',
  'outline-style-double': '.outline-style-double { outline-style: double; }',
  'outline-style-groove': '.outline-style-groove { outline-style: groove; }',
  'outline-style-ridge': '.outline-style-ridge { outline-style: ridge; }',
  'outline-style-inset': '.outline-style-inset { outline-style: inset; }',
  'outline-style-outset': '.outline-style-outset { outline-style: outset; }',
  'outline-style-initial': '.outline-style-initial { outline-style: initial; }',
  'outline-style-inherit': '.outline-style-inherit { outline-style: inherit; }',

  'overflow-x-clip': 'overflow-x-clip { overflow-x: clip; }',
  'overflow-y-clip': 'overflow-y-clip { overflow-y: clip; }',
  'overflow-clip': 'overflow-clip { overflow: clip; }',
  'overflow-visible': '.overflow-visible { overflow: visible; }',
  'overflow-auto': '.overflow-auto { overflow: auto; }',
  'overflow-x-visible': '.overflow-x-visible { overflow-x: visible; }',
  'overflow-x-auto': '.overflow-x-auto { overflow-x: auto; }',
  'overflow-y-visible': '.overflow-y-visible { overflow-y: visible; }',
  'overflow-y-auto': '.overflow-y-auto { overflow-y: auto; }',
  'overflow-wrap-normal': '.overflow-wrap-normal { overflow-wrap: normal; }',
  'overflow-wrap-break': '.overflow-wrap-break { overflow-wrap: break-word; }',

  'scroll-behavior-auto': '.scroll-behavior-auto { scroll-behavior: auto; }',
  'scroll-behavior-smooth': '.scroll-behavior-smooth { scroll-behavior: smooth; }',

  'text-none': '.text-none { text-decoration: none; }',
  'text-underline': '.text-underline { text-decoration: underline; }',
  'text-overline': '.text-overline { text-decoration: overline; }',
  'text-line-through': '.text-line-through { text-decoration: line-through; }',

  'text-style-solid': '.text-style-solid { text-decoration-style: solid; }',
  'text-style-double': '.text-style-double { text-decoration-style: double; }',
  'text-style-dotted': '.text-dotted { text-decoration-style: dotted; }',
  'text-style-dashed': '.text-style-dashed { text-decoration-style: dashed; }',
  'text-style-wavy': '.text-style-wavy { text-decoration-style: wavy; }',

  'text-justify-auto': '.text-justify-auto { text-align: justify; }',
  'text-justify-inter-word': '.text-justify-inter-word { text-align: justify; text-justify: inter-word; }',
  'text-justify-inter-ideograph': '.text-justify-inter-ideograph { text-align: justify; text-justify: inter-ideograph; }',
  'text-justify-inter-cluster': '.text-justify-inter-cluster { text-align: justify; text-justify: inter-cluster; }',
  'text-justify-distribute': '.text-justify-distribute { text-align: justify; text-justify: distribute; }',
  'text-justify-kashida': '.text-justify-kashida { text-align: justify; text-justify: kashida; }',
  'text-justify-tibetan': '.text-justify-tibetan { text-align: justify; text-justify: auto; text-align-last: justify; }',

  'text-orientation-mixed': '.text-orientation-mixed { text-orientation: mixed; }',
  'text-orientation-upright': '.text-orientation-upright { text-orientation: upright; }',
  'text-orientation-sideways': '.text-orientation-sideways { text-orientation: sideways; }',
  'text-orientation-sideways-right': '.text-orientation-sideways-right { text-orientation: sideways-right; }',

  'text-clip': '.text-clip { text-overflow: clip; }',
  'text-ellipsis': '.text-ellipsis { text-overflow: ellipsis; }',

  'white-space-normal': '.white-space-normal { white-space: normal; }',
  'white-space-nowrap': '.white-space-nowrap { white-space: nowrap; }',
  'white-space-pre': '.white-space-pre { white-space: pre; }',
  'white-space-pre-line': '.white-space-pre-line { white-space: pre-line; }',
  'white-space-pre-wrap': '.white-space-pre-wrap { white-space: pre-wrap; }',

  'visibility-visible': '.visibility-visible { visibility: visible; }',
  'visibility-hidden': '.visibility-hidden { visibility: hidden; }',
  'visibility-collapse': '.visibility-collapse { visibility: collapse; }',

  'vertical-align-baseline': '.vertical-align-baseline { vertical-align: baseline; }',
  'vertical-align-sub': '.vertical-align-sub { vertical-align: sub; }',
  'vertical-align-super': '.vertical-align-super { vertical-align: super; }',
  'vertical-align-text-top': '.vertical-align-text-top { vertical-align: text-top; }',
  'vertical-align-text-bottom': '.vertical-align-text-bottom { vertical-align: text-bottom; }',
  'vertical-align-middle': '.vertical-align-middle { vertical-align: middle; }',
  'vertical-align-top': '.vertical-align-top { vertical-align: top; }',
  'vertical-align-bottom': '.vertical-align-bottom { vertical-align: bottom; }',

  'word-break-normal': '.word-break-normal { word-break: normal; }',
  'word-break-keep-all': '.word-break-keep-all { word-break: keep-all; }',
  'word-break-break-all': '.word-break-break-all { word-break: break-all; }',
  'word-wrap-normal': '.word-wrap-normal { word-wrap: normal; }',
  'word-wrap-break-word': '.word-wrap-break-word { word-wrap: break-word; }',

  'box-slice': '.box-slice { box-decoration-break: slice; }',
  'box-clone': '.box-clone { box-decoration-break: clone; }',
  'box-size-content': '.box-size-content { box-sizing: content-box; }',
  'box-size-border': '.box-size-border { box-sizing: border-box; }',

  'break-after-auto': '.break-after-auto { break-after: auto; }',
  'break-after-avoid': '.break-after-avoid { break-after: avoid; }',
  'break-after-always': '.break-after-always { break-after: always; }',
  'break-after-all': '.break-after-all { break-after: all; }',
  'break-after-page': '.break-after-page { break-after: avoid-page; }',
  'break-after-column': '.break-after-column { break-after: avoid-column; }',

  'break-before-auto': '.break-before-auto { break-before: auto; }',
  'break-before-avoid': '.break-before-avoid { break-before: avoid; }',
  'break-before-always': '.break-before-always { break-before: always; }',
  'break-before-all': '.break-before-all { break-before: all; }',
  'break-before-page': '.break-before-page { break-before: avoid-page; }',
  'break-before-column': '.break-before-column { break-before: avoid-column; }',

  'flex-nowrap': '.flex-nowrap { flex-wrap: nowrap; }',
  'flex-wrap': '.flex-wrap { flex-wrap: wrap; }',
  'flex-reverse': '.flex-reverse { flex-wrap: wrap-reverse; }',

  'grid-flow-row': '.grid-flow-row { grid-auto-flow: row; }',
  'grid-flow-cols': '.grid-flow-cols { grid-auto-flow: column; }',
  'grid-flow-row-dense': '.grid-flow-row-dense { grid-auto-flow: row dense; }',
  'grid-flow-cols-dense': '.grid-flow-cols-dense { grid-auto-flow: column dense; }',

  'h-auto': '.h-auto { height: auto; }',
  'hyphens-none': '.hyphens-none { hyphens: none; }',
  'hyphens-manual': '.hyphens-manual { hyphens: manual; }',
  'hyphens-auto': '.hyphens-auto { hyphens: auto; }',

  'img-rendering-auto': '.img-rendering-auto { image-rendering: auto; }',
  'img-rendering-crisp': '.img-rendering-crisp { image-rendering: crisp-edges; }',
  'img-rendering-pix': '.img-rendering-pix { image-rendering: pixelated; }',
  'img-rendering-smooth': '.img-rendering-smooth { image-rendering: smooth; }',

  'isolation-auto': '.isolation-auto { isolation: auto; }',
  'isolation-isolate': '.isolation-isolate { isolation: isolate; }',
  'line-height-normal': '.line-height-normal { line-height: normal; }',

  'mix-normal': '.mix-normal { mix-blend-mode: normal; }',
  'mix-multiply': '.mix-multiply { mix-blend-mode: multiply; }',
  'mix-screen': '.mix-screen { mix-blend-mode: screen; }',
  'mix-overlay': '.mix-overlay { mix-blend-mode: overlay; }',
  'mix-darken': '.mix-darken { mix-blend-mode: darken; }',
  'mix-lighten': '.mix-lighten { mix-blend-mode: lighten; }',
  'mix-color-dodge': '.mix-color-dodge { mix-blend-mode: color-dodge; }',
  'mix-color-burn': '.mix-color-burn { mix-blend-mode: color-burn; }',
  'mix-hard-light': '.mix-hard-light { mix-blend-mode: hard-light; }',
  'mix-soft-light': '.mix-soft-light { mix-blend-mode: soft-light; }',
  'mix-difference': '.mix-difference { mix-blend-mode: difference; }',
  'mix-exclusion': '.mix-exclusion { mix-blend-mode: exclusion; }',
  'mix-hue': '.mix-hue { mix-blend-mode: hue; }',
  'mix-saturation': '.mix-saturation { mix-blend-mode: saturation; }',
  'mix-color': '.mix-color { mix-blend-mode: color; }',
  'mix-luminosity': '.mix-luminosity { mix-blend-mode: luminosity; }',

  'object-top-left': '.object-top-left { object-position: top left; }',
  'object-top-center': '.object-top-center { object-position: top center; }',
  'object-top-right': '.object-top-right { object-position: top right; }',
  'object-center-left': '.object-center-left { object-position: center left; }',
  'object-center-center': '.object-center-center { object-position: center center; }',
  'object-center-right': '.object-center-right { object-position: center right; }',
  'object-bottom-left': '.object-bottom-left { object-position: bottom left; }',
  'object-bottom-center': '.object-bottom-center { object-position: bottom center; }',
  'object-bottom-right': '.object-bottom-right { object-position: bottom right; }',

  'offset-auto': '.offset-auto { offset-anchor: auto; }',
  'offset-center': '.offset-center { offset-anchor: center; }',

  'overscroll-auto': '.overscroll-auto { overscroll-behavior: auto; }',
  'overscroll-contain': '.overscroll-contain { overscroll-behavior: contain; }',
  'overscroll-none': '.overscroll-none { overscroll-behavior: none; }',

  'page-break-after-auto': '.page-break-after-auto { page-break-after: auto; }',
  'page-break-after-always': '.page-break-after-always { page-break-after: always; }',
  'page-break-after-avoid': '.page-break-after-avoid { page-break-after: avoid; }',
  'page-break-after-left': '.page-break-after-left { page-break-after: left; }',
  'page-break-after-right': '.page-break-after-right { page-break-after: right; }',

  'page-break-before-auto': '.page-break-before-auto { page-break-before: auto; }',
  'page-break-before-always': '.page-break-before-always { page-break-before: always; }',
  'page-break-before-avoid': '.page-break-before-avoid { page-break-before: avoid; }',
  'page-break-before-left': '.page-break-before-left { page-break-before: left; }',
  'page-break-before-right': '.page-break-before-right { page-break-before: right; }',

  'paint-normal': '.paint-normal { paint-order: normal; }',
  'paint-fill': '.paint-fill { paint-order: fill; }',
  'paint-stroke': '.paint-stroke { paint-order: stroke; }',
  'paint-markers': '.paint-markers { paint-order: markers; }',

  'perspective-center': '.perspective-center { perspective-origin: center; }',
  'perspective-top-left': '.perspective-top-left { perspective-origin: top left; }',
  'perspective-top': '.perspective-top { perspective-origin: top; }',
  'perspective-top-right': '.perspective-top-right { perspective-origin: top right; }',
  'perspective-left': '.perspective-left { perspective-origin: left; }',
  'perspective-right': '.perspective-right { perspective-origin: right; }',
  'perspective-bottom-left': '.perspective-bottom-left { perspective-origin: bottom left; }',
  'perspective-bottom': '.perspective-bottom { perspective-origin: bottom; }',
  'perspective-bottom-right': '.perspective-bottom-right { perspective-origin: bottom right; }',

  'place-normal': '.place-normal { place-content: normal; }',
  'place-start': '.place-start { place-content: start; }',
  'place-end': '.place-end { place-content: end; }',
  'place-flex-start': '.place-flex-start { place-content: flex-start; }',
  'place-flex-end': '.place-flex-end { place-content: flex-end; }',
  'place-center': '.place-center { place-content: center; }',
  'place-space-between': '.place-space-between { place-content: space-between; }',
  'place-space-around': '.place-space-around { place-content: space-around; }',
  'place-space-evenly': '.place-space-evenly { place-content: space-evenly; }',
  'place-stretch': '.place-stretch { place-content: stretch; }',
  'place-safe-center': '.place-safe-center { place-content: safe center; }',
  'place-unsafe-center': '.place-unsafe-center { place-content: unsafe center; }',
  'place-items-normal': '.place-items-normal { place-items: normal; }',
  'place-items-start': '.place-items-start { place-items: start; }',
  'place-items-end': '.place-items-end { place-items: end; }',
  'place-items-flex-start': '.place-items-flex-start { place-items: flex-start; }',
  'place-items-flex-end': '.place-items-flex-end { place-items: flex-end; }',
  'place-items-center': '.place-items-center { place-items: center; }',
  'place-items-baseline': '.place-items-baseline { place-items: baseline; }',
  'place-items-stretch': '.place-items-stretch { place-items: stretch; }',
  'place-items-safe-center': '.place-items-safe-center { place-items: safe center; }',
  'place-items-unsafe-center': '.place-items-unsafe-center { place-items: unsafe center; }',
  'place-self-auto': '.place-self-auto { place-self: auto; }',
  'place-self-normal': '.place-self-normal { place-self: normal; }',
  'place-self-start': '.place-self-start { place-self: start; }',
  'place-self-end': '.place-self-end { place-self: end; }',
  'place-self-flex-start': '.place-self-flex-start { place-self: flex-start; }',
  'place-self-flex-end': '.place-self-flex-end { place-self: flex-end; }',
  'place-self-center': '.place-self-center { place-self: center; }',
  'place-self-baseline': '.place-self-baseline { place-self: baseline; }',
  'place-self-stretch': '.place-self-stretch { place-self: stretch; }',
  'place-self-safe-center': '.place-self-safe-center { place-self: safe center; }',
  'place-self-unsafe-center': '.place-self-unsafe-center { place-self: unsafe center; }',

  'pointer-events-auto': '.pointer-events-auto { pointer-events: auto; }',
  'pointer-events-none': '.pointer-events-none { pointer-events: none; }',
  'pointer-events-visiblePainted': '.pointer-events-visiblePainted { pointer-events: visiblePainted; }',
  'pointer-events-visibleFill': '.pointer-events-visibleFill { pointer-events: visibleFill; }',
  'pointer-events-visibleStroke': '.pointer-events-visibleStroke { pointer-events: visibleStroke; }',
  'pointer-events-visible': '.pointer-events-visible { pointer-events: visible; }',
  'pointer-events-painted': '.pointer-events-painted { pointer-events: painted; }',
  'pointer-events-fill': '.pointer-events-fill { pointer-events: fill; }',
  'pointer-events-stroke': '.pointer-events-stroke { pointer-events: stroke; }',
  'pointer-events-all': '.pointer-events-all { pointer-events: all; }',

  'resize-none': '.resize-none { resize: none; }',
  'resize-both': '.resize-both { resize: both; }',
  'resize-horizontal': '.resize-horizontal { resize: horizontal; }',
  'resize-vertical': '.resize-vertical { resize: vertical; }',
  'resize-block': '.resize-block { resize: block; }',
  'resize-inline': '.resize-inline { resize: inline; }',
  'resize-initial': '.resize-initial { resize: initial; }',
  'resize-inherit': '.resize-inherit { resize: inherit; }',
  'resize-unset': '.resize-unset { resize: unset; }',

  'scroll-snap-none': '.scroll-snap-none { scroll-snap-align: none; }',
  'scroll-snap-start': '.scroll-snap-start { scroll-snap-align: start; }',
  'scroll-snap-end': '.scroll-snap-end { scroll-snap-align: end; }',
  'scroll-snap-center': '.scroll-snap-center { scroll-snap-align: center; }',
  'scroll-snap-start-end': '.scroll-snap-start-end { scroll-snap-align: start end; }',
  'scroll-snap-start-center': '.scroll-snap-start-center { scroll-snap-align: start center; }',
  'scroll-snap-start-base': '.scroll-snap-start-base { scroll-snap-align: start base; }',
  'scroll-snap-end-start': '.scroll-snap-end-start { scroll-snap-align: end start; }',
  'scroll-snap-end-center': '.scroll-snap-end-center { scroll-snap-align: end center; }',
  'scroll-snap-end-base': '.scroll-snap-end-base { scroll-snap-align: end base; }',
  'scroll-snap-center-start': '.scroll-snap-center-start { scroll-snap-align: center start; }',
  'scroll-snap-center-end': '.scroll-snap-center-end { scroll-snap-align: center end; }',
  'scroll-snap-center-base': '.scroll-snap-center-base { scroll-snap-align: center base; }',
  'scroll-snap-base-start': '.scroll-snap-base-start { scroll-snap-align: base start; }',
  'scroll-snap-base-end': '.scroll-snap-base-end { scroll-snap-align: base end; }',
  'scroll-snap-base-center': '.scroll-snap-base-center { scroll-snap-align: base center; }',

  'scroll-snap-stop-normal': '.scroll-snap-stop-normal { scroll-snap-stop: normal; }',
  'scroll-snap-stop-always': '.scroll-snap-stop-always { scroll-snap-stop: always; }',

  'table-layout-auto': '.table-layout-auto { table-layout: auto; }',
  'table-layout-fixed': '.table-layout-fixed { table-layout: fixed; }',

  'text-justify': `.text-justify { text-align: justify; }`,

  'text-align-last-auto': '.text-align-last-auto { text-align-last: auto; }',
  'text-align-last-start': '.text-align-last-start { text-align-last: start; }',
  'text-align-last-end': '.text-align-last-end { text-align-last: end; }',
  'text-align-last-left': '.text-align-last-left { text-align-last: left; }',
  'text-align-last-right': '.text-align-last-right { text-align-last: right; }',
  'text-align-last-center': '.text-align-last-center { text-align-last: center; }',
  'text-align-last-justify': '.text-align-last-justify { text-align-last: justify; }',
  'text-align-last-match-parent': '.text-align-last-match-parent { text-align-last: match-parent; }',
  'text-align-last-initial': '.text-align-last-initial { text-align-last: initial; }',
  'text-align-last-inherit': '.text-align-last-inherit { text-align-last: inherit; }',
  'text-align-last-unset': '.text-align-last-unset { text-align-last: unset; }',

  'text-thickness-auto': '.text-thickness-auto { text-decoration-thickness: auto; }',

  'unicode-normal': '.unicode-normal { unicode-bidi: normal; }',
  'unicode-embed': '.unicode-embed { unicode-bidi: embed; }',
  'unicode-override': '.unicode-override { unicode-bidi: bidi-override; }',
  'unicode-isolate': '.unicode-isolate { unicode-bidi: isolate; }',
  'unicode-isolate-override': '.unicode-isolate-override { unicode-bidi: isolate-override; }',
  'unicode-plaintext': '.unicode-plaintext { unicode-bidi: plaintext; }',

  'user-select-auto': '.user-select-auto { user-select: auto; }',
  'user-select-none': '.user-select-none { user-select: none; }',
  'user-select-text': '.user-select-text { user-select: text; }',
  'user-select-all': '.user-select-all { user-select: all; }',
  'user-select-element': '.user-select-element { user-select: element; }',
  'user-select-contain': '.user-select-contain { user-select: contain; }',
  'user-select-contents': '.user-select-contents { user-select: contents; }',

  'writing-horizontal-tb': '.writing-horizontal-tb { writing-mode: horizontal-tb; }',
  'writing-vertical-rl': '.writing-vertical-rl { writing-mode: vertical-rl; }',
  'writing-vertical-lr': '.writing-vertical-lr { writing-mode: vertical-lr; }',
  'writing-sideways-rl': '.writing-sideways-rl { writing-mode: sideways-rl; }',
  'writing-sideways-lr': '.writing-sideways-lr { writing-mode: sideways-lr; }'

};


/**
 * TODO:
 * To revisit / Temporarily skipped
 * - animation
 * - keep a list of not-founds in memory to optimize compilation
 */

const cacheFolder = __dirname + '/../classes.cache';

// Create the cache folder if it doesn't exist
if (!fs.existsSync(cacheFolder)) {
  fs.mkdirSync(cacheFolder);
}

for (const key in classes) {
  const cleanedKey = key.replaceAll(/\n/g, '');
  const cleanedValue = classes[key].replaceAll(/\n/g, '');
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






