# @josephmark/tailwind-plugins

[![Run Tests](https://github.com/whoisjosephmark/tailwind-plugins/actions/workflows/test.yml/badge.svg)](https://github.com/whoisjosephmark/tailwind-plugins/actions/workflows/test.yml)

A collection of useful Tailwind plugins from the team at [Josephmark](https://josephmark.studio)

## Installation

`npm i -S @josephmark/tailwind-plugins`

## Available Plugins

- [oklab](#oklab)
- [containment](#containment)

## `oklab`

[Oklab](https://bottosson.github.io/posts/oklab/) is a perceptual colourspace that is particularly good for gradients as it has a more uniform perceived lightness and hue compared to other colourspaces.

Using Oklab interpolation can make your CSS gradients a bit sweeter and more natural, however it's not supported in [Firefox yet](https://caniuse.com/mdn-css_types_image_gradient_conic-gradient_interpolation_color_space).

### Configuration

First, add oklab to your `tailwind.config.js` file:

```js
// tailwind.config.js
const { oklab } = require("@josephmark/tailwind-plugins")
module.exports = {
  plugins: [oklab],
}
```

### Variants

**`supports-oklab`**

Check for CSS support of Oklab colours

**`supports-oklab-grad`**

Check for CSS support of Oklab gradient interpolation

### Utilities

Note - all Oklab colour utilities currently allow JIT values only since your theme is probably in hex or RGB.

**`bg-gradient-oklab-to-[direction]`**

Use Oklab interpolation for gradients

eg: `bg-gradient-oklab-to-r from-red-500 to-blue-500` or `supports-oklab-grad:bg-gradient-oklab-to-r from-red-500 to-blue-500`

> Note: colours don't need to be Oklab to use interpolation

**`from-oklab-[colour]`**

Set gradient start to an Oklab colour

eg: `from-oklab-[0.77_-0.09_-0.06]` or `supports-oklab:from-oklab-[0.77_-0.09_-0.06]`

**`via-oklab-[colour]`**

Set gradient mid-point to an Oklab colour

eg: `via-oklab-[0.78_0.06_0.16]`

**`to-oklab-[colour]`**

Set gradient end to an Oklab colour

eg: `to-oklab-[0.62_0.15_-0.16]`

**`text-oklab-[colour]`**

Set text to an Oklab colour

eg: `text-oklab-[0.77_-0.09_-0.06]`

**`bg-oklab-[colour]`**

Set background to an Oklab colour

eg: `bg-oklab-[0.77_-0.09_-0.06]`

## `containment`

[CSS containment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment) can help with rendering optimisation, especially on long pages with lots of elements. Setting `contain-content content-visibility-auto` on an element will let the browser skip rendering it when it is offscreen, saving on render time.

### Configuration

First, add containment to your `tailwind.config.js` file:

```js
// tailwind.config.js
const { containment } = require("@josephmark/tailwind-plugins")
module.exports = {
  plugins: [containment],
}
```

### Utilities

**`contain-[value]`**

Set the element's [containment mode](https://developer.mozilla.org/en-US/docs/Web/CSS/contain). Default values are available, and JIT values can be added for specific needs / combination values.

eg: `contain-content` or `contain-[paint_layout]`

**`content-visibility-[value]`**

Set the element's [content visibility property](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility).

eg: `content-visibility-auto` or `content-visibility-hidden`

**`contain-intrinsic-size`**

Set the element's [contain-intrinsic-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size). This allows culled elements to contribute to the page's scroll height to minimise scrollbar jank.

eg: `contain-intrinsic-size-auto` or `contain-intrinsic-size-[auto_500px]`
