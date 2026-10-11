# oxFlow — Shared stroke

The x joins the upper portion of F through one horizontal stroke. The lower arms remain separate to preserve both letters. Circular counters, slightly overshooting the baseline, balance the angular x and w.

## Files

- `horizontal-*`: primary horizontal logo, with protective padding. The wordmark is the primary logo; do not add the ox symbol beside it and repeat the name.
- `wordmark-*`: tighter canvas for precise placement in layouts.
- `symbol-*`: compact ox monogram.
- `avatar-*`: square, transparent avatar with approximately 15% horizontal padding. Use on a plain contrasting background.
- `avatar-light.png`, `avatar-dark.png`, `avatar-forest.png`: ready-to-upload square avatars with solid backgrounds.
- `favicon-*`: optically heavier compact monogram, with a smaller counter and stronger junction. PNGs at 16, 24, 32 and 48 px are included.
- `presentation.png`: light/dark overview with actual-size favicon samples. `presentation.svg` is a presentation document, not a logo master; it includes raster pixel samples and live labels.
- `build.cjs`: editable geometry and reproducible export script. Uses the project's existing Sharp dependency; run from this repository with `node output/oxflow-identity/build.cjs`.

All 15 logo SVG masters contain vector paths, no live text, no embedded images and no external font dependencies. Their lettering and geometry remain editable in vector software. PNG logo exports retain transparency. The horizontal PNGs are 1642 px wide; avatar PNGs are 1024 px square.

## Colors

| Role | HEX | Use |
|---|---|---|
| Black | `#000000` | Default logo on white or light stock |
| White | `#FFFFFF` | Reversed logo on dark backgrounds |
| Forest | `#245B4B` | Optional restrained accent; adds warmth without relying on color for recognition |
| Dark background | `#17221E` | Reversed presentation and avatar |
| Light background | `#F7F7F2` | Optional neutral presentation surface |

The identity works in one solid ink. Use black or white whenever contrast is uncertain. Avoid gradients, outlines, effects, rotation or stretching.

## Typography

The final logo uses original geometric path-drawn lettering constructed for this artwork, not a named or modified font. There is no font license or installed-font requirement for the logo files. The initial AI concept was a visual reference, not an identified typeface. This is not a full alphabet or distributable font.

Presentation labels use the system Helvetica/Arial fallback and are not part of the logo. These fonts are not bundled; their use depends on the license of the user's operating system or font installation. No font purchase is needed to use the outlined logos.

## Spacing and sizes

- Keep clear space of at least one main vertical stroke (32 source units, approximately one fifth of the lettering height) around the wordmark. The horizontal master includes this space; add external space when using the tighter standalone wordmark.
- Around the symbol, allow at least half the o counter diameter (23 source units). The square avatar exceeds this horizontal allowance.
- Use the horizontal logo at 160 CSS px wide or larger, preferably 180–220 px in navigation. At 160 px the actual lettering is approximately 31 px high. For print, start at 30 mm wide and proof on the intended stock.
- Use the standalone symbol at 32 px wide or larger. For square slots of 16, 24 or 32 px, use the favicon version. At 16 px it functions as a compact silhouette; the letters are clearer at 24–32 px.
- Use the square avatar at 48 px or larger. Its padding protects the artwork when a platform applies a circular crop.
- The primary spelling is oxFlow. The 0xFLOW spelling was explored in the initial concepts and is not a second final identity.

## Validation

The light and dark presentation and native-size favicon renders were visually reviewed. Export checks confirm artwork, transparency and path-only logo SVGs. Run the build script to repeat these checks. This design process does not establish trademark availability or exclusivity.
