# @josephmark/hooks

A collection of useful Tailwind plugins from the team at [Josephmark](https://josephmark.studio)

## Installation

`npm i -S @josephmark/tailwind-plugins`

## Available Plugins

- [oklab](#oklab)

## `oklab`

[Oklab](https://bottosson.github.io/posts/oklab/) is a perceptual colourspace that is particularly good for gradients as it has a more uniform perceived lightness and hue compared to other colourspaces.

Using Oklab can make your CSS gradients a bit sweeter and more natural, however it's not supported for gradients in [Firefox yet](https://caniuse.com/mdn-css_types_image_gradient_conic-gradient_interpolation_color_space).

### Usage

First, add oklab to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [require("@josephmark/tailwind-plugins/oklab")],
}
```

**Utilities**

Note - all Oklab colour utilities currently JIT values only since your theme is probably in hex or RGB.

- `bg-gradient-oklab-to-[direction]` Use Oklab interpolation for gradients eg: `bg-gradient-oklab-to-r from-red-500 to-blue-500` or `supports-oklab-grad:bg-gradient-oklab-to-r from-red-500 to-blue-500`
  (note: colours don't need to be Oklab to use interpolation). **This is probably the utility you want to use from this plugin.**
- `from-oklab-[colour]` Set gradient start to an Oklab colour eg: `from-oklab-[0.77_-0.09_-0.06]` or `supports-oklab:from-oklab-[0.77_-0.09_-0.06]`
- `via-oklab-[colour]` Set gradient mid-point to an Oklab colour eg: `via-oklab-[0.78_0.06_0.16]` or `supports-oklab:via-oklab-[0.78_0.06_0.16]`
- `to-oklab-[colour]` Set gradient end to an Oklab colour eg: `to-oklab-[0.62_0.15_-0.16]` or `supports-oklab:to-oklab-[0.62_0.15_-0.16]`
- `text-oklab-[colour]` Set text to an Oklab colour eg: `text-oklab-[0.77_-0.09_-0.06]` or `supports-oklab:text-oklab-[0.77_-0.09_-0.06]`
- `bg-oklab-[colour]` Set background to an Oklab colour eg: `bg-oklab-[0.77_-0.09_-0.06]`

**Variants**

- `supports-oklab` Check for CSS support of Oklab colours
- `supports-oklab-grad` Check for CSS support of Oklab gradient interpolation
