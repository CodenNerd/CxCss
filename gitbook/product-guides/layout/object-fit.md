

### Object Fit Classes

#### `.object-fit`

Sets the `object-fit` property to `cover`, scaling the content to fill the container while preserving its aspect ratio. The entire container will be filled, and some parts of the content may be cropped.

CSS equivalent: `object-fit: cover;`

Example usage:
```html
<img src="image.jpg" class="object-fit" alt="Image">
```


#### `.object-fit-fill`

Sets the `object-fit` property to `fill`, scaling the content to fill the container without preserving its aspect ratio.

CSS equivalent: `object-fit: fill;`

Example usage:
```html
<img src="image.jpg" class="object-fit-fill" alt="Image">
```

#### `.object-fit-contain`

Sets the `object-fit` property to `contain`, scaling the content to fit within the container while preserving its aspect ratio. The entire content may not be visible if the container has a different aspect ratio.

CSS equivalent: `object-fit: contain;`

Example usage:
```html
<img src="image.jpg" class="object-fit-contain" alt="Image">
```

#### `.object-fit-cover`

Sets the `object-fit` property to `cover`, scaling the content to fill the container while preserving its aspect ratio. The entire container will be filled, and some parts of the content may be cropped.

CSS equivalent: `object-fit: cover;`

Example usage:
```html
<img src="image.jpg" class="object-fit-cover" alt="Image">
```

#### `.object-fit-none`

Sets the `object-fit` property to `none`, displaying the content at its original size without any scaling or cropping. The content may overflow the container if its dimensions exceed the container's dimensions.

CSS equivalent: `object-fit: none;`

Example usage:
```html
<img src="image.jpg" class="object-fit-none" alt="Image">
```

#### `.object-fit-scale-down`

Sets the `object-fit` property to `scale-down`, scaling the content to fit within the container while preserving its aspect ratio. If the content is smaller than the container, it will be displayed at its original size.

CSS equivalent: `object-fit: scale-down;`

Example usage:
```html
<img src="image.jpg" class="object-fit-scale-down" alt="Image">
```

The `object-fit` property is used to control how an element's content, such as an image or video, should be resized and fitted within its container. Use these utility classes to apply specific object fit behaviors to elements in your layout.
