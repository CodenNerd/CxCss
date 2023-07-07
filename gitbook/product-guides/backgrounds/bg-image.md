Background Image Classes

The following classes control the background image of elements:

`.bg-image-${url}`
Sets the background image of the element using the provided URL.

CSS equivalent: `background-image: url("$1");`

Example usage:
```html
<div class="bg-image-1">
  <!-- Content with background image using URL "1" -->
</div>
```

In the example above, the background image of the element will be set using the URL "1". You can replace "1" with the desired URL.

`.bg-image-none`
Removes the background image from the element.

CSS equivalent: `background-image: none;`

Example usage:
```html
<div class="bg-image-none">
  <!-- Content without a background image -->
</div>
```

In the example above, the background image of the element will be removed.

These utility classes provide a convenient way to set or remove background images for elements. Use the `.bg-image-${digit}` class to set a background image with a specific URL, and use the `.bg-image-none` class to remove the background image altogether.
