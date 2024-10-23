
### Grid Columns Auto Classes

#### `.grid-{number}-cols-auto`

Sets the number of auto-sized columns in a grid container.

CSS equivalent: `grid-template-columns: repeat({number}, auto);`

Example usage:
```html
<div class="grid-3-cols-auto">This grid container has 3 auto-sized columns.</div>
```

### Grid Columns 1fr Classes

#### `.grid-{number}-cols-1fr`

Sets the number of columns with a fraction unit of 1fr in a grid container.

CSS equivalent: `grid-template-columns: repeat({number}, 1fr);`

Example usage:
```html
<div class="grid-4-cols-1fr">This grid container has 4 columns with a fraction unit of 1fr each.</div>
```

These classes allow you to easily define the number of columns in a grid container and specify their sizing behavior. The `.grid-{number}-cols-auto` class sets the specified number of auto-sized columns, while the `.grid-{number}-cols-1fr` class sets the specified number of columns with a fraction unit of 1fr.


### Grid Column Span Classes

#### `.grid-col-span-{number}`

Sets the number of columns the element spans in a grid container.

CSS equivalent: `grid-column: span {number};`

Example usage:
```html
<div class="grid-col-span-2">This element spans 2 columns in a grid container.</div>
```

This class allows you to specify the number of columns an element should span in a grid container. By using the `.grid-col-span-{number}` class, you can easily control the width of an element across multiple grid columns.

Here's the documentation for the grid utility classes related to grid auto flow:

### Grid Auto Flow Classes

#### `.grid-flow-row`

Sets the grid auto flow to row.

CSS equivalent: `grid-auto-flow: row;`

Example usage:
```html
<div class="grid-flow-row">This element follows a row-based auto flow in a grid container.</div>
```

#### `.grid-flow-cols`

Sets the grid auto flow to column.

CSS equivalent: `grid-auto-flow: column;`

Example usage:
```html
<div class="grid-flow-cols">This element follows a column-based auto flow in a grid container.</div>
```

#### `.grid-flow-row-dense`

Sets the grid auto flow to row with dense packing.

CSS equivalent: `grid-auto-flow: row dense;`

Example usage:
```html
<div class="grid-flow-row-dense">This element follows a row-based auto flow with dense packing in a grid container.</div>
```

#### `.grid-flow-cols-dense`

Sets the grid auto flow to column with dense packing.

CSS equivalent: `grid-auto-flow: column dense;`

Example usage:
```html
<div class="grid-flow-cols-dense">This element follows a column-based auto flow with dense packing in a grid container.</div>
```

These classes allow you to control the automatic placement of grid items within a grid container. The `.grid-flow-row` class sets the auto flow to row, which places the items in a row-based order. The `.grid-flow-cols` class sets the auto flow to column, which places the items in a column-based order. The `.grid-flow-row-dense` and `.grid-flow-cols-dense` classes enable dense packing, which ensures that no grid cell is left empty if there's an opportunity to move a smaller item into it.

Certainly! Here's the documentation for the grid utility class related to grid auto columns:

### Grid Auto Columns Classes

#### `.grid-auto-columns-{number}`

Sets the size of grid auto columns in a grid container.

CSS equivalent: `grid-auto-columns: {number}px;`

Example usage:
```html
<div class="grid-auto-columns-100">This grid container has grid auto columns with a width of 100 pixels.</div>
```

This class allows you to specify the size of grid auto columns in a grid container. By using the `.grid-auto-columns-{number}` class, you can control the width of automatically generated columns in the grid.


Certainly! Here's the documentation for the grid utility classes related to grid auto columns, grid auto rows, and grid gaps:

### Grid Auto Columns Classes

#### `.grid-auto-columns-{number}`

Sets the size of grid auto columns in a grid container.

CSS equivalent: `grid-auto-columns: {number}px;`

Example usage:
```html
<div class="grid-auto-columns-100">This grid container has grid auto columns with a width of 100 pixels.</div>
```

### Grid Auto Rows Classes

#### `.grid-auto-rows-{number}`

Sets the size of grid auto rows in a grid container.

CSS equivalent: `grid-auto-rows: {number}px;`

Example usage:
```html
<div class="grid-auto-rows-50">This grid container has grid auto rows with a height of 50 pixels.</div>
```

### Grid Column Gap Class

#### `.grid-cols-gap-{number}`

Sets the gap between grid columns in a grid container.

CSS equivalent: `grid-column-gap: {number}px;`

Example usage:
```html
<div class="grid-cols-gap-10">This grid container has a column gap of 10 pixels.</div>
```

### Grid Gap Classes

#### `.grid-gap-{number}`

Sets the gap between grid rows and columns in a grid container.

CSS equivalent: `grid-gap: {number}px;`

Example usage:
```html
<div class="grid-gap-10">This grid container has a gap of 10 pixels between rows and columns.</div>
```

### Grid Row Gap Class

#### `.grid-row-gap-{number}`

Sets the gap between grid rows in a grid container.

CSS equivalent: `grid-row-gap: {number}px;`

Example usage:
```html
<div class="grid-row-gap-5">This grid container has a row gap of 5 pixels.</div>
```

These classes allow you to control the sizing and gaps within a grid container. The `.grid-auto-columns-{number}` class sets the size of automatically generated grid columns, while the `.grid-auto-rows-{number}` class sets the size of automatically generated grid rows. The `.grid-cols-gap-{number}` class controls the gap between grid columns, and the `.grid-row-gap-{number}` class controls the gap between grid rows. The `.grid-gap-{number}` class sets a uniform gap between both rows and columns.
 

### Column Gap Class

#### `.column-gap-{number}`

Sets the gap between columns in a multi-column layout.

CSS equivalent: `column-gap: {number}px;`

Example usage:
```html
<div class="column-gap-20">This container has a column gap of 20 pixels.</div>
```

The `.column-gap-{number}` class allows you to control the gap between columns in a multi-column layout. It sets the `column-gap` CSS property, which determines the space between columns.

You can specify the desired gap size by replacing `{number}` with the desired pixel value. For example, using `.column-gap-20` sets a column gap of 20 pixels.

Feel free to ask if you have any further questions!
