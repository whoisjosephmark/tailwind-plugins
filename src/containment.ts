import plugin from "tailwindcss/plugin"

/**
 * Using CSS containment and content visibility can help improve rendering performance, especially on long pages.
 *
 * Use `contain-[value]` to specify the containment strategy for an element and its contents.
 *
 * `content-visibility-auto` can skip rendering for off-screen elements.
 * `contain-intrinsic-size-[size]` can help maintain scroll heights when an element is culled.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment
 *
 * @example
 * ```css
 * <div class="contain-layout content-visibility-auto">
 * ```
 */
const containmentPlugin = plugin(function addContainment({ matchUtilities }) {
  matchUtilities(
    {
      contain: (value) => ({
        contain: value,
      }),
    },
    {
      values: {
        none: "none",
        content: "content",
        strict: "strict",
        layout: "layout",
        style: "style",
        paint: "paint",
        size: "size",
      },
    }
  )
  matchUtilities(
    {
      "content-visibility": (value) => ({
        "content-visibility": value,
      }),
    },
    {
      values: {
        visible: "visible",
        auto: "auto",
        hidden: "hidden",
      },
    }
  )
  matchUtilities(
    {
      "contain-intrinsic-size": (value) => ({
        "contain-intrinsic-size": value,
      }),
    },
    {
      values: {
        auto: "auto",
      },
    }
  )
})

export default containmentPlugin
