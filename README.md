# Job listings with filtering

My solution to the [Job listings with filtering](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://job-listings-with-filtering.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/job-listings-with-filtering

## Built with

- Next.js 16, App Router, static export
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### Colour

**The brand teal darkens from `#5CA5A5` to `#437979` wherever text is involved.** It fails
in both directions at once: as ink it's 2.85:1 on white, and as a surface it gives white
labels the same 2.85. Keeping the surface and darkening the label doesn't rescue it either,
since the design's own darkest ink on that teal only reaches 4.22. So the colour itself had
to move. The replacement holds hue and saturation and drops lightness, which is the
smallest step that clears 4.5:1 on the tightest of the three backdrops.

**The header band and the featured stripe keep the original teal**, since neither carries
text. The visible consequence is that on a featured card the stripe and the NEW! badge are
slightly different teals.

The muted grey darkens too. Two backdrops constrain it, the white card and the tinted page,
and the page is the tighter one.

### Layout

**There's no tablet frame, so 640 to 1087px is designed rather than derived.** The logo
moves inline beside the text column and the chips keep their own full-width row below it.
Letting the mobile card stretch to 1000px instead would have left a 48px logo alone on a
very wide card.

**The desktop row layout starts at 1088px, which is a measured number.** The widest card
needs 955px before its chip row collides with the text column. With the design's padding
and scrollbar headroom that lands just above 1024, so `lg` would have shipped a layout that
breaks at exactly the width most likely to find it.

`html { overflow-y: scroll }` rather than `scrollbar-gutter: stable`. Filtering changes the
page height enough to add and remove the scrollbar, which shifts the board sideways on
every click. `scrollbar-gutter` reserves that space inside the root's content box, which
would stop the full-bleed header band short of the viewport edge.

### Other

**The header artwork is inlined into the stylesheet as a data URI.** The band is the LCP
element, and a `background-image` request is only discovered after style resolution and
fetched at low priority. Both SVGs reduce to a single path each and total under 2KB
encoded, so they ride along in CSS that's already render-blocking.

**There's no empty state, because it's unreachable.** A filter can only be added by
clicking a chip on a visible card, and that card carries the chip being added, so it always
survives the new filter. Clicking an already-active chip is a no-op rather than a toggle,
which is what the design implies, since it draws a hover state for those chips but no
selected state.

Chip order follows the design rather than `data.json`'s category order, and `location` uses
the design's casing.

Scroll reveals are transform-only on the card list, gated behind `prefers-reduced-motion`
and `@supports (animation-timeline: view())`. The page is 2070px against a 900px viewport
at desktop, so they have somewhere to run.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
