
### White Space Classes

#### `.white-space-normal`
Collapses whitespace and allows the text to wrap naturally. This is the default behavior.

CSS equivalent: `white-space: normal;`

Example usage:
```html
<p class="white-space-normal">This text will wrap normally, and extra spaces will be collapsed.</p>
```

---

#### `.white-space-nowrap`
Prevents the text from wrapping, keeping it on a single line regardless of the container's width.

CSS equivalent: `white-space: nowrap;`

Example usage:
```html
<p class="white-space-nowrap">This text will not wrap and will overflow the container if it is too long.</p>
```

---

#### `.white-space-pre`
Preserves all whitespace, including spaces and line breaks. Text will only wrap at line breaks.

CSS equivalent: `white-space: pre;`

Example usage:
```html
<pre class="white-space-pre">This    text     preserves   whitespace
and will    only wrap
at line breaks.</pre>
```

---

#### `.white-space-pre-line`
Preserves whitespace but collapses multiple spaces into a single space. Text will wrap at line breaks.

CSS equivalent: `white-space: pre-line;`

Example usage:
```html
<p class="white-space-pre-line">This    text will    collapse spaces and 
preserve line breaks.</p>
```

---

#### `.white-space-pre-wrap`
Preserves whitespace, collapses multiple spaces into a single space, and allows text to wrap. Text will break at line breaks and when necessary to prevent overflow.

CSS equivalent: `white-space: pre-wrap;`

Example usage:
```html
<p class="white-space-pre-wrap">This text preserves whitespace but will wrap when necessary, allowing for a more flexible layout.</p>
```

---

These classes give precise control over how whitespace is treated within an element, allowing you to balance text presentation and layout requirements.