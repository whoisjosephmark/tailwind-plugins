import plugin from "tailwindcss/plugin"

/**
 * Adds utility `bg-gradient-oklab-to-[side]` and variants `supports-oklab` and `supports-oklab-grad`
 *
 * Combine with regular gradients for fallback support on unsupported browsers
 *
 * @example
 * ```css
 * <div class="bg-gradient-to-b supports-oklab-grad:bg-gradient-oklab-to-b from-red-500 to-blue-500">
 * ```
 */
const oklabPlugin = plugin(function addOkLab({ matchUtilities, addVariant }) {
  addVariant(
    "supports-oklab-grad",
    "@supports (background-image: linear-gradient(in oklab, #fff, #fff))"
  )
  addVariant("supports-oklab", "@supports (color: oklab(0 0 0))")
  matchUtilities(
    {
      "bg-gradient-oklab-to": (value) => ({
        backgroundImage: `linear-gradient(in oklab to ${value}, var(--tw-gradient-stops))`,
      }),
    },
    {
      values: {
        t: "top",
        tr: "top right",
        r: "right",
        br: "bottom right",
        b: "bottom",
        bl: "bottom left",
        l: "left",
        tl: "top left",
      },
    }
  )
})

export default oklabPlugin
