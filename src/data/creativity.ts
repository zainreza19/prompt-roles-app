import type { Role } from "@/data/roles";

// 20 distinct iPhone product-design generator prompts. Each one locks in a
// different visual language AND a specific font pairing, so running all 20
// against an AI design/image generator (or a coding agent building the UI)
// produces 20 genuinely different-looking app concepts instead of the same
// "clean minimal app" every time.
export const creativityPrompts: Role[] = [
  {
    id: "neubrutalist",
    name: "Neubrutalist Bold",
    emoji: "🧱",
    color: "#FFD400",
    tagline: "Thick borders, hard shadows, zero subtlety",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in the Neubrutalist style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN — e.g. "a habit tracker's home screen"]
"""

Design direction — Neubrutalism:
- Thick 2-3px black borders on every card, button, and input
- Hard offset drop shadows (4-6px, no blur, pure black)
- Flat, saturated color blocks (no gradients) — pick 1 loud accent + black + off-white
- Oversized, unapologetic typography for headlines
- Visible grid, no rounded corners over 4px

Fonts: Headlines in "Archivo Black" (or "Space Grotesk" Bold as fallback), body and UI labels in "Space Mono" for a technical, unpolished counterpoint.

Do the following:
1. Describe the full screen layout top to bottom, naming every component.
2. Specify exact hex colors for background, accent, borders, and text.
3. Specify type sizes/weights for headline, body, and button label using the fonts above.
4. Describe one signature interaction (e.g. a button press shadow-collapse) that reinforces the style.
5. Output this as a design brief detailed enough to hand to Figma or a UI-generating AI tool directly.`,
  },
  {
    id: "swiss-minimalist",
    name: "Swiss / International Minimalist",
    emoji: "▫️",
    color: "#F5F5F5",
    tagline: "Grid discipline, whitespace, one accent color",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in the Swiss / International Typographic Style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Swiss Minimalism:
- Strict underlying grid (8pt spacing system), heavy use of negative space
- Near-monochrome palette: white/off-white background, near-black text, exactly one restrained accent color used sparingly
- No decoration, no shadows, no gradients — hierarchy comes purely from size, weight, and spacing
- Left-aligned or grid-aligned text, never centered body copy

Fonts: "Helvetica Now" (or "Inter" as the practical iOS fallback) for everything — vary only weight (400/600/700) and size to build hierarchy, never mix a second typeface.

Do the following:
1. Lay out the screen using the 8pt grid — specify margins, gutters, and section spacing in points.
2. Define the type scale (e.g. 34/22/17/13pt) and which weight each screen element uses.
3. Name the single accent color (hex) and the 2-3 places it's allowed to appear.
4. Explain how hierarchy is communicated with zero color and zero shadow, only type and space.
5. Output as a design brief precise enough to build pixel-for-pixel in Figma.`,
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism / Frosted Depth",
    emoji: "🧊",
    color: "#A0E7FF",
    tagline: "Blurred translucent layers over vivid backdrops",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in the Glassmorphism style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Glassmorphism:
- Frosted-glass cards: semi-transparent white/light fills, background blur (~20-40px), 1px light-opacity border
- Vivid, colorful, slightly blurred gradient backdrop behind the glass layers (mesh gradient or soft blobs)
- Layered depth — multiple glass panels at different elevations, subtle soft shadows beneath each
- Icons and controls in a light, thin-line style so they read against blur

Fonts: "SF Pro Display" for headlines (Semibold), "SF Pro Text" for body — keep it native-feeling since the depth effect is doing the visual work, not the type.

Do the following:
1. Describe the background gradient/mesh (colors, direction, blur amount) that sits behind everything.
2. Describe each glass panel: blur strength, fill opacity, border color/opacity, corner radius, shadow.
3. Specify text and icon colors that stay legible against the blurred backdrop (include contrast reasoning).
4. Note where glassmorphism should NOT be used (e.g. primary CTA) to keep the screen usable, not just pretty.
5. Output as a design brief with exact blur/opacity/radius values for direct implementation.`,
  },
  {
    id: "neumorphism",
    name: "Neumorphism / Soft UI",
    emoji: "🫧",
    color: "#E0E5EC",
    tagline: "Extruded, soft, single-tone tactile surfaces",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in the Neumorphism (Soft UI) style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Neumorphism:
- Everything built from ONE base color; elements appear extruded or pressed into that same surface
- Dual soft shadows: a light shadow (top-left) and a dark shadow (bottom-right) create the raised/pressed illusion
- No borders, no strong color contrast — depth comes entirely from shadow, not outline or hue
- Rounded, pill-like shapes throughout

Fonts: "Poppins" (Medium/SemiBold) for headlines, "Nunito" for body text — both rounded-terminal typefaces that match the soft, extruded surfaces.

Do the following:
1. Specify the single base background color (hex) everything is built from.
2. Define the exact shadow pair (color, blur, offset, direction) for a "raised" element and a "pressed" (active/selected) element.
3. Show how you'll indicate the primary action given the palette intentionally has low contrast (e.g. a controlled accent break).
4. Flag the accessibility risk of neumorphism's low contrast and how this design compensates (text weight, size, or a contained accent use).
5. Output as a design brief with concrete shadow/color values.`,
  },
  {
    id: "skeuomorphic",
    name: "Skeuomorphic Realism",
    emoji: "🎛️",
    color: "#C9A876",
    tagline: "Textures and materials that mimic real objects",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a modern Skeuomorphic style (think early iOS Notes/Calendar, reimagined tastefully).

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Skeuomorphism:
- UI elements reference real-world materials/objects relevant to the app's purpose (leather, paper, brushed metal, fabric, wood grain — pick ONE that fits the app's domain)
- Subtle realistic lighting: gradients, soft highlights, and grain/texture, but restrained — not 2009-era excess
- Buttons look genuinely pressable (bevels, inner shadows on press)
- Icons are small illustrated objects, not flat glyphs

Fonts: "New York" (Apple's serif) for headlines to reinforce a crafted, physical feel, "SF Pro Text" for body/UI labels for legibility.

Do the following:
1. Choose the one real-world material this app's domain justifies, and describe how it's applied (texture, color, grain).
2. Describe the lighting model (light source direction, highlight/shadow placement) applied consistently across elements.
3. Describe 2 icons in detail as small illustrated objects.
4. Explain how you keep this modern and restrained rather than dated — name 2 specific restraint decisions.
5. Output as a design brief detailed enough for an illustrator/UI designer to execute.`,
  },
  {
    id: "y2k-frutiger",
    name: "Y2K / Frutiger Aero",
    emoji: "💿",
    color: "#7FD8FF",
    tagline: "Glossy chrome, blue skies, bubbly optimism",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in the Y2K / Frutiger Aero style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Frutiger Aero:
- Glossy, chrome/reflective button surfaces with bright highlights
- Optimistic imagery cues: blue sky, water droplets, soft green/blue gradients, light bokeh
- Bubbly, rounded shapes with a glassy sheen (distinct from flat glassmorphism — this one is glossy, not matte-frosted)
- Bright, clean, "aspirational tech" color story: sky blue, lime green, white

Fonts: "Eurostile" (or "Michroma" as an available fallback) for a techy display headline, "Montserrat" for clean, rounded body text.

Do the following:
1. Describe the background treatment (sky/water/light gradient cues) and its exact color stops.
2. Describe the glossy button/card treatment: highlight placement, reflection, gradient direction.
3. Specify the accent palette (hex values) for the "aspirational tech" mood.
4. Note one motion/microinteraction that would suit this optimistic, glossy aesthetic (e.g. a light sweep on tap).
5. Output as a design brief precise enough to prototype.`,
  },
  {
    id: "cyberpunk-neon",
    name: "Cyberpunk Neon",
    emoji: "🌆",
    color: "#FF2E8A",
    tagline: "Dark mode, electric glow, high contrast",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a Cyberpunk Neon dark-mode style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Cyberpunk Neon:
- Near-black background (#0A0A0F range), high-contrast neon accents (electric pink, cyan, or violet — pick a 2-color neon pair)
- Glow effects on active elements (soft outer glow matching the accent hue)
- Sharp geometric dividers, thin glowing hairlines instead of solid borders
- Occasional glitch/scanline texture used sparingly as an accent, not everywhere

Fonts: "Chakra Petch" or "Rajdhani" for headlines (angular, technical), "JetBrains Mono" for data/labels/timestamps to reinforce a HUD feel.

Do the following:
1. Specify the exact background and two neon accent hex values, and where each accent is used.
2. Describe the glow effect (blur radius, color, intensity) on the primary CTA and on active nav states.
3. Describe how data/status text uses the monospace font to feel like a HUD readout.
4. Flag where you deliberately pulled back the glow/neon to keep the screen readable (this style fails fast if overused — name the restraint).
5. Output as a design brief with concrete values.`,
  },
  {
    id: "editorial-serif",
    name: "Editorial / Magazine",
    emoji: "📰",
    color: "#1A1A1A",
    tagline: "Serif-led, generous margins, print-inspired",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in an Editorial / Magazine style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Editorial:
- Print-inspired layout: generous margins, pull quotes, asymmetric grid, occasional full-bleed imagery
- Restrained color: cream/off-white background, ink-black text, one muted accent (terracotta, forest, or navy)
- Hairline rules to separate sections instead of cards/boxes
- Confident, large serif headlines that behave like a magazine cover line

Fonts: "Playfair Display" (or "Fraunces") for headlines/pull quotes, "Inter" or "Söhne" for body copy — a strong serif/sans pairing is the entire visual signature here.

Do the following:
1. Describe the layout grid (asymmetric column structure, margins) and where imagery breaks it.
2. Specify the headline treatment: size, line-height, and how it should feel like a cover line, not a UI label.
3. Specify body copy measure (characters per line) and line-height for print-quality readability.
4. Name the one accent color and its single functional use (e.g. links or tags only).
5. Output as a design brief detailed enough to build in Figma.`,
  },
  {
    id: "vaporwave-retro",
    name: "Retro-Futurism / Vaporwave",
    emoji: "🌴",
    color: "#FF71CE",
    tagline: "Pink-purple gradients, grid horizons, nostalgia",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a Retro-Futurism / Vaporwave style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Vaporwave:
- Pink-to-purple-to-cyan gradient backgrounds, sometimes with a receding grid-horizon motif
- High-contrast neon-pastel palette against dark or gradient backgrounds
- Retro geometric shapes (circles, triangles, sun motifs) as decorative accents, used sparingly behind content
- A wink of 80s/90s computing nostalgia without sacrificing modern usability

Fonts: A bold, slightly-condensed display font like "Bebas Neue" or "Orbitron" for headlines (evokes retro-tech signage), "Space Grotesk" for body/UI to keep it legible and current.

Do the following:
1. Specify the exact gradient (color stops, angle) used for the primary background.
2. Describe the retro decorative motif (grid, sun, shapes) and where it sits relative to content (behind, not competing).
3. Specify text colors that hold WCAG AA contrast against the gradient — call out any spot where you had to add a scrim/overlay to keep it legible.
4. Describe the primary CTA treatment (color, glow, shape) so it reads clearly against a busy background.
5. Output as a design brief with concrete gradient and color values.`,
  },
  {
    id: "organic-biophilic",
    name: "Organic / Biophilic",
    emoji: "🌿",
    color: "#8FBC8F",
    tagline: "Curved shapes, earth tones, nature-inspired calm",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in an Organic / Biophilic style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Biophilic:
- Blob/organic shapes instead of rectangles where possible (irregular rounded containers, wavy dividers)
- Earthy, muted, natural palette: sage, terracotta, cream, warm brown — no pure black or saturated neon
- Soft, diffused shadows (large blur, low opacity) suggesting natural, ambient light
- Occasional botanical or textural motifs (leaf shapes, grain texture) used as accents

Fonts: "Fraunces" (a warm, slightly quirky serif) for headlines, "Karla" for body — both have a handcrafted, humanist quality that fits the calm, natural mood.

Do the following:
1. Define the earth-tone palette with exact hex values (background, 2 accents, text).
2. Describe how organic/blob shapes replace standard rectangular cards for at least 2 components.
3. Describe the ambient shadow treatment (blur, opacity, offset) used instead of hard shadows.
4. Explain how this palette maintains sufficient text contrast despite avoiding pure black/white.
5. Output as a design brief detailed enough to hand to an illustrator and a UI designer together.`,
  },
  {
    id: "memphis-maximalist",
    name: "Memphis / Maximalist",
    emoji: "🎉",
    color: "#FF6B6B",
    tagline: "Clashing color, playful shapes, controlled chaos",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a Memphis-inspired Maximalist style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Memphis Maximalism:
- Bold, clashing-but-intentional color combinations (e.g. hot pink + mustard + teal) used confidently
- Playful geometric confetti — squiggles, zigzags, dots, half-circles — scattered as background accents
- Mixed shape language: sharp triangles next to soft blobs next to perfect circles
- Despite the energy, one clear focal hierarchy so the screen doesn't become noise

Fonts: "Cooper Black" (or "Fredoka" as a rounder fallback) for playful, chunky headlines, "Space Grotesk" for body/UI to keep functional text legible amid the visual noise.

Do the following:
1. Pick a 3-4 color clashing palette (exact hex) and justify why it reads as "confident" rather than "accidental."
2. Describe the confetti/decorative shape system: which shapes, how many, where they're allowed (background only, never on top of text).
3. Describe how you preserve a single clear visual hierarchy despite the busy backdrop — name the one restrained element that anchors the eye.
4. Describe the primary CTA so it still reads as the most important thing on a maximalist screen.
5. Output as a design brief with concrete values.`,
  },
  {
    id: "monochrome-luxury",
    name: "Monochrome Luxury",
    emoji: "🖤",
    color: "#000000",
    tagline: "Black, white, and restraint as a status signal",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a Monochrome Luxury style (high-fashion, premium brand feel).

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Monochrome Luxury:
- Strictly black, white, and greys — no color accent at all, or at most one metallic (gold/silver) used once per screen
- Extreme whitespace as a deliberate signal of confidence, not emptiness
- Thin hairline dividers (0.5-1px), no shadows, no rounded pill buttons — sharp or barely-rounded corners
- Photography/imagery (if any) is high-contrast black and white

Fonts: "Didot" (or "Cormorant" as fallback) for headlines — a high-contrast fashion-editorial serif, "Helvetica Neue" for body/UI in a light or regular weight only, tracked out slightly on labels.

Do the following:
1. Describe the exact greyscale palette (3-4 values from near-black to near-white) and where each is used.
2. Specify letter-spacing and weight for headline vs. label text to achieve a premium, editorial feel.
3. Describe how the single optional metallic accent (if used) is applied — likely just the primary CTA or a badge, never decoratively.
4. Explain how whitespace itself carries the "premium" signal — name the specific margin/spacing values that make this feel expensive rather than empty.
5. Output as a design brief precise enough to build without a single stray color.`,
  },
  {
    id: "kinetic-motion",
    name: "Kinetic / Motion-First",
    emoji: "🌀",
    color: "#4D96FF",
    tagline: "Designed around movement, not just static frames",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a Kinetic, motion-first style — describe it as a sequence, not a static screen.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN OR TRANSITION]
"""

Design direction — Kinetic:
- Every element has an implied entrance/exit motion (staggered fade-ups, elastic scale, momentum-based scrolling)
- Layout is designed to look intentional mid-transition, not just at rest — describe at least one in-between frame
- Bold, simple shapes and flat color so motion (not detail) carries the visual interest
- A clear motion "signature" (e.g. everything eases with the same spring curve) for consistency

Fonts: "Neue Montreal" (or "General Sans" as fallback) for headlines and UI — a clean, geometric grotesk that doesn't fight the motion for attention.

Do the following:
1. Describe the resting-state layout, then describe the entrance sequence (order, timing offsets, easing) for each element.
2. Define one consistent spring/easing curve (e.g. duration + easing description) used across all transitions for coherence.
3. Describe the flat color/shape system that supports motion clearly (avoid detail that would blur or smear during animation).
4. Describe one signature gesture-driven interaction (e.g. drag-to-dismiss with rubber-banding) end to end.
5. Output as a design + motion brief a designer and a motion engineer could both work from.`,
  },
  {
    id: "bauhaus-geometric",
    name: "Bauhaus Geometric",
    emoji: "🔺",
    color: "#E63946",
    tagline: "Primary colors, pure shapes, functional form",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a Bauhaus-inspired Geometric style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Bauhaus:
- Primary color triad (red, yellow, blue) plus black and white — nothing outside this palette
- Pure geometric forms (circle, square, triangle) used as functional elements, not decoration — e.g. a circle IS the avatar frame, a triangle IS a play/next icon
- Strong asymmetric but balanced composition, grid-based
- Function dictates form: every shape choice ties back to what the element does

Fonts: "Futura" (or "DIN Next"/"Century Gothic" as fallback) for everything — a single geometric sans that echoes the shape language, varied by weight and size only.

Do the following:
1. Assign the primary triad + black/white to specific roles (background, primary action, secondary accent, text) with hex values.
2. Identify 3 UI elements where a pure geometric shape does double duty as both form and function — describe each.
3. Describe the underlying grid and how asymmetric balance is achieved (not centered, but not chaotic).
4. Explain, in one line, the design rationale for each major choice (Bauhaus is opinionated — every choice should be justifiable).
5. Output as a design brief with exact values.`,
  },
  {
    id: "hand-sketched",
    name: "Handcrafted / Sketchnote",
    emoji: "✏️",
    color: "#FFF3B0",
    tagline: "Hand-drawn warmth over rigid digital polish",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a Handcrafted / Sketchnote style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Handcrafted:
- Slightly imperfect, hand-drawn-feeling borders and icons (wobbly lines, not perfectly straight/round)
- Warm paper-like background texture (off-white, subtle grain), marker/highlighter-style color blocks behind key info
- Doodle accents (arrows, underlines, stars) used the way a person would annotate a notebook
- Feels personal and low-pressure, opposite of corporate-polished

Fonts: "Caveat" or "Kalam" (handwriting-style) for accents/annotations and short headlines only, "Work Sans" for actual body/functional UI text so it stays fully legible.

Do the following:
1. Describe the paper/background texture and base palette (warm off-white + 1-2 marker-highlight colors).
2. Describe how hand-drawn elements (borders, icons, doodles) are applied WITHOUT hurting usability — specify where you kept things clean/functional vs. where you added warmth.
3. Show 2 examples of doodle-style annotation used purposefully (e.g. a hand-drawn arrow pointing to a new feature).
4. Explain the rule for when to use the handwriting font vs. the body font, so functional text never sacrifices legibility for charm.
5. Output as a design brief an illustrator-minded designer could execute.`,
  },
  {
    id: "fintech-dashboard",
    name: "Data-Dense Fintech Dashboard",
    emoji: "📊",
    color: "#0B1F3A",
    tagline: "Precision, density, and trustworthy structure",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a Data-Dense Fintech Dashboard style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN — likely one showing numbers, balances, or charts]
"""

Design direction — Fintech Dashboard:
- Deep navy or near-black background, crisp white text, one confident accent (electric green for "up," red for "down," blue for neutral actions)
- Tabular alignment discipline — numbers right-aligned, decimals lined up, tabular figures throughout
- Compact but never cramped: tight vertical rhythm, clear section dividers via subtle background tone changes, not heavy borders
- Sparklines/small charts as inline data, not decorative

Fonts: "IBM Plex Sans" for labels/headlines, "IBM Plex Mono" (tabular figures) for all numeric data — the monospace-for-numbers rule is essential so figures align and feel precise/trustworthy.

Do the following:
1. Define the base palette (background, text, positive/negative/neutral accents) with exact hex values.
2. Specify the numeric type treatment: font, size, tabular-figure setting, and alignment rule for every number on screen.
3. Describe the vertical rhythm/spacing system that keeps this dense but scannable, not cramped.
4. Describe one inline data-visualization element (sparkline, mini bar) and its exact styling.
5. Output as a design brief precise enough for a fintech engineering team to implement pixel-accurately.`,
  },
  {
    id: "gradient-mesh",
    name: "Gradient Mesh / Aurora",
    emoji: "🌈",
    color: "#B983FF",
    tagline: "Soft flowing color fields as the hero visual",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a Gradient Mesh / Aurora style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Gradient Mesh:
- A soft, multi-point mesh gradient (3-5 color anchors blending smoothly) as the dominant background visual, often animated slowly in a real product
- Content sits on clean white/near-black cards floating above the gradient, high contrast against it
- Minimal ornamentation elsewhere — the gradient IS the personality, everything else stays simple so it doesn't compete
- Grain/noise overlay at low opacity to keep the gradient from banding and to add texture

Fonts: "Clash Display" (or "General Sans") for bold, confident headlines, "Inter" for body — both clean geometric sans so nothing competes visually with the gradient.

Do the following:
1. Define the mesh gradient: 3-5 anchor colors (hex) and their approximate positions, describing how they blend.
2. Describe the noise/grain overlay treatment (opacity, blend mode) used to prevent banding.
3. Describe how content cards sit above the gradient with enough contrast to stay legible (background color, elevation, shadow).
4. Note whether/how the gradient would subtly animate in a live product, and confirm it wouldn't distract from reading content.
5. Output as a design brief with concrete color and effect values.`,
  },
  {
    id: "pastel-kawaii",
    name: "Pastel Kawaii / Playful",
    emoji: "🍡",
    color: "#FFC6D9",
    tagline: "Soft pastels, rounded everything, joyful tone",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a Pastel Kawaii / Playful style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Pastel Kawaii:
- Soft pastel palette (blush pink, lavender, mint, butter yellow), no harsh saturated colors
- Heavily rounded corners everywhere (large radius pill shapes), soft drop shadows with a color tint (not pure black)
- Cute character-like iconography (rounded, friendly, slightly anthropomorphized icons) where icons appear
- Generous padding so the interface feels soft, breathable, and unintimidating

Fonts: "Baloo 2" or "Fredoka" for headlines (rounded, bubbly display font), "Quicksand" for body/UI — both share a consistent rounded-terminal DNA.

Do the following:
1. Define the pastel palette (4-5 hex values) and confirm text-on-pastel contrast meets WCAG AA (flag and fix any combo that doesn't).
2. Specify the corner-radius scale used across buttons, cards, and inputs (should feel consistently soft, not random).
3. Describe the tinted shadow treatment (color, blur, opacity) that replaces plain black shadows.
4. Describe one "cute" icon or illustration in detail, and where the line is so it stays charming without feeling childish for the app's actual audience.
5. Output as a design brief detailed enough to hand to an illustrator and UI designer.`,
  },
  {
    id: "hacker-terminal",
    name: "Brutalist Terminal / Hacker",
    emoji: "💻",
    color: "#00FF7F",
    tagline: "Monospace everything, command-line honesty",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design in a Brutalist Terminal / Hacker style.

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Terminal:
- Pure black background, monospace text throughout, a single phosphor accent color (green, amber, or white) for all emphasis
- Minimal chrome: text prompts, ASCII-style dividers ("---", "///"), blinking-cursor cue on inputs
- No icons where a text label would do — this style prizes literal, unstyled honesty over iconography
- Sharp corners only, 1px hairline borders, no shadows, no gradients

Fonts: "JetBrains Mono" (or "IBM Plex Mono") for absolutely everything — headline, body, labels, data — weight and size are the only variation allowed.

Do the following:
1. Specify the exact background and single phosphor accent color (hex) and confirm high contrast throughout.
2. Describe how hierarchy is built using only monospace type (size, weight, spacing, ALL CAPS labels) with zero icons or color variety.
3. Describe the input field treatment including the blinking-cursor cue and any command-line-style prompt characters used.
4. Describe one ASCII-style divider or decorative text element and where it's used.
5. Output as a design brief a developer could implement directly in code without needing a visual mockup.`,
  },
  {
    id: "spatial-depth",
    name: "Spatial Depth (Vision Pro–Inspired)",
    emoji: "🥽",
    color: "#EAEAF0",
    tagline: "Layered planes, soft light, physical depth cues",
    prompt: `You are acting as a Senior Product Designer generating an iPhone app design inspired by spatial computing (Vision Pro–style layered depth, adapted to a flat iPhone screen).

App / screen to design:
"""
[DESCRIBE YOUR APP AND THE SPECIFIC SCREEN]
"""

Design direction — Spatial Depth:
- Clear z-axis layering: background plane, mid-ground content plane, and floating foreground controls, each with distinct soft shadows implying real physical distance
- Soft, diffused ambient lighting — no hard edges, elements feel lit from above like real physical panels
- Subtle parallax cue described for how planes would shift relative to each other on scroll/tilt
- Neutral, calm base palette (soft greys/off-whites) so depth and light — not color — create the visual interest

Fonts: "SF Pro Rounded" for headlines (matches the soft, physical feel), "SF Compact" for dense UI labels/controls.

Do the following:
1. Define the 3 depth planes for this screen and what sits on each one.
2. Describe the lighting model: light source direction, shadow softness/spread for each plane, and how elevation is visually communicated.
3. Describe the parallax behavior on scroll or device tilt — how much each plane should shift relative to the others.
4. Confirm the neutral palette (hex values) and explain why color stays restrained so depth reads clearly.
5. Output as a design brief detailed enough for both a visual designer and a motion/AR-aware engineer to build from.`,
  },
];
