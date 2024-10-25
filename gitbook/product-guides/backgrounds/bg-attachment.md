### Background Attachment Classes

The following classes control the background attachment of elements:

#### `.bg-fixed`

Sets the background-attachment property to "fixed", which keeps the background image fixed within the viewport as the content scrolls.

CSS equivalent: `background-attachment: fixed;`

Example usage:
```html
<div class="bg-fixed">
  <!-- Content with a fixed background image -->
</div>
```

In the example above, the background image of the element will remain fixed even when the content is scrolled.

---

#### `.bg-local`

Sets the background-attachment property to "local", which scrolls the background image along with the content inside the element.

CSS equivalent: `background-attachment: local;`

Example usage:
```html
<div class="bg-local">
  <!-- Content with a locally scrolling background image -->
</div>
```

In the example above, the background image will scroll with the content inside the element.

---

#### `.bg-scroll`

Sets the background-attachment property to "scroll", which allows the background image to scroll independently of the content.

CSS equivalent: `background-attachment: scroll;`

Example usage:
```html
<div class="bg-scroll">
  <!-- Content with a scrolling background image -->
</div>
```

In the example above, the background image will scroll independently of the content, creating a parallax effect or other scrolling visual effects.

---

These utility classes provide an easy way to control the background attachment behavior of elements, allowing you to create various background effects and enhance the visual appearance of your web page.
