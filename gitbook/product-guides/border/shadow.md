Shadow Utility Classes

The following utility classes control the box shadow of elements:

`.shadow-${h}-${v}-${blur}-${spread}-${color}`
Sets the box-shadow property to a specific shadow configuration with horizontal offset `${h}px`, vertical offset `${v}px`, blur radius `${blur}px`, spread radius `${spread}px`, and color `${color}`.

CSS equivalent: `box-shadow: ${h}px ${v}px ${blur}px ${spread}px ${color};`

Example usage:
```html
<div class="shadow-2-2-4-1-red">
  <!-- Content with a red box shadow -->
</div>
```

In the example above, the box shadow is configured with a horizontal offset of 2 pixels, vertical offset of 2 pixels, blur radius of 4 pixels, spread radius of 1 pixel, and color "red". You can customize these values to achieve different shadow effects.

Note: Make sure to replace `${h}`, `${v}`, `${blur}`, `${spread}`, and `${color}` with appropriate numerical values and color names or codes when using these utility classes.

These utility classes provide a convenient way to apply different box shadow configurations to elements, allowing you to add depth and visual effects to your design without writing custom CSS styles for each shadow variation.
