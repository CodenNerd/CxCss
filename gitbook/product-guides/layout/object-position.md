
### Object Position Classes

#### `.object-top-left`

Sets the `object-position` property to `top left`, positioning the content at the top left corner of its container.

CSS equivalent: `object-position: top left;`

Example usage:
```html
<img src="image.jpg" class="object-top-left" alt="Image">
```

---

#### `.object-top-center`

Sets the `object-position` property to `top center`, positioning the content at the top center of its container horizontally and at the top vertically.

CSS equivalent: `object-position: top center;`

Example usage:
```html
<img src="image.jpg" class="object-top-center" alt="Image">
```

---

#### `.object-top-right`

Sets the `object-position` property to `top right`, positioning the content at the top right corner of its container.

CSS equivalent: `object-position: top right;`

Example usage:
```html
<img src="image.jpg" class="object-top-right" alt="Image">
```

---

#### `.object-center-left`

Sets the `object-position` property to `center left`, positioning the content at the center left of its container horizontally and at the center vertically.

CSS equivalent: `object-position: center left;`

Example usage:
```html
<img src="image.jpg" class="object-center-left" alt="Image">
```

---

#### `.object-center-center`

Sets the `object-position` property to `center center`, positioning the content at the center of its container both horizontally and vertically.

CSS equivalent: `object-position: center center;`

Example usage:
```html
<img src="image.jpg" class="object-center-center" alt="Image">
```

---

#### `.object-center-right`

Sets the `object-position` property to `center right`, positioning the content at the center right of its container horizontally and at the center vertically.

CSS equivalent: `object-position: center right;`

Example usage:
```html
<img src="image.jpg" class="object-center-right" alt="Image">
```

---

#### `.object-bottom-left`

Sets the `object-position` property to `bottom left`, positioning the content at the bottom left corner of its container.

CSS equivalent: `object-position: bottom left;`

Example usage:
```html
<img src="image.jpg" class="object-bottom-left" alt="Image">
```

---

#### `.object-bottom-center`

Sets the `object-position` property to `bottom center`, positioning the content at the bottom center of its container horizontally and at the bottom vertically.

CSS equivalent: `object-position: bottom center;`

Example usage:
```html
<img src="image.jpg" class="object-bottom-center" alt="Image">
```

---

#### `.object-bottom-right`

Sets the `object-position` property to `bottom right`, positioning the content at the bottom right corner of its container.

CSS equivalent: `object-position: bottom right;`

Example usage:
```html
<img src="image.jpg" class="object-bottom-right" alt="Image">
```

---


### Dynamic Object Position Classes

You can dynamically adjust the object position using the following pattern-based utility classes:

- `.object-position-x-y`: Sets the `object-position` property to a specific pixel value for both the horizontal and vertical positions. Replace `x` and `y` with the desired pixel values.

- `.object-position-x-yp`: Sets the `object-position` property to a specific pixel value for the horizontal position and a percentage value for the vertical position. Replace `x` with the desired pixel value and `yp` with the desired percentage value.

- `.object-position-xp-y`: Sets the `object-position` property to a specific percentage value for the horizontal position and a pixel value for the vertical position. Replace `xp` with the desired percentage value and `y` with the desired pixel value.

- `.object-position-xp-yp`: Sets the `object-position` property to specific percentage values for both the horizontal and vertical positions. Replace `xp` and `yp` with the desired percentage values.

Note: In the pattern-based classes, `x` represents the horizontal position value, `y` represents the vertical position value, and `p` represents the percentage value.

Examples of pattern-based utility classes:
```html
<img src="image.jpg" class="object-position-10-20" alt="Image">
<img src="image.jpg" class="object-position-10-50p" alt="Image">
<img src="image.jpg" class="object-position-50p-20" alt="Image">
<img src="image.jpg" class="object-position-30p-70p" alt="Image">
```

---

These utility classes allow you to precisely control the position of the content within its container using the `object-position` property. The percentage value indicated by "p" enables you to set the vertical position proportionally relative to the container's height.
