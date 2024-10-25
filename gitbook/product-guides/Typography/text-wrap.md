### Text Wrap Classes

#### `.text-wrap-wrap`
Wraps text normally within the container, allowing lines to break and continue on the next line.

CSS equivalent: `text-wrap: wrap;`

Example usage:
```html
<h2 class="text-wrap-wrap">This text will wrap across lines.</h2>
```

---

#### `.text-wrap-nowrap`
Prevents text from wrapping, keeping all text on a single line regardless of overflow.

CSS equivalent: `text-wrap: nowrap;`

Example usage:
```html
<h2 class="text-wrap-nowrap">This text will not wrap across lines.</h2>
```

---

#### `.text-wrap-balance`
Balances text lines for a visually even appearance.

CSS equivalent: `text-wrap: balance;`

Example usage:
```html
<h2 class="text-wrap-balance">This text will be distributed evenly across lines.</h2>
```

---

#### `.text-wrap-pretty`
Similar to ***text-wrap-balance*** but does not have orphans (a single word appearing on its own line).

CSS equivalent: `text-wrap: pretty;`

Example usage:
```html
<h2 class="text-wrap-pretty">This text will be distributed evenly across lines without orphans.</h2>
```

---

#### `.text-wrap-stable`
Maintains stable line breaks across different display conditions.

CSS equivalent: `text-wrap: stable;`

Example usage:
```html
<h2 class="text-wrap-stable">This text maintains stable line breaks, even on different screens.</h2>
```

---

These classes give precise control over how text is wrapped, allowing you to balance readability, aesthetics, and layout stability.