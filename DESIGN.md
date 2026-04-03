# Design System Document: Tanya - AI Sound Production Agency

## 1. Overview & Creative North Star: "Cinematic Precision"
The North Star for this design system is **"Cinematic Precision."** We are not building a standard SaaS dashboard; we are crafting a high-end editorial experience that mirrors the precision of professional sound engineering. The aesthetic is cold, chic, and high-tech—evoking the feeling of a darkened, multi-million dollar recording studio in Tokyo or Berlin.

To break the "template" look, this system utilizes **intentional asymmetry** and **tonal depth**. Large-scale typography (Display-LG) should be used as a structural element, often overlapping subtle background gradients or "ghost" imagery to create a sense of three-dimensional space. The layout avoids rigid boxes in favor of "floating" content blocks and expansive negative space, ensuring every pixel feels intentional and premium.

---

## 2. Colors & Atmospheric Depth
Our palette is rooted in the "Deep Navy" and "Charcoal" spectrum, designed to minimize eye strain while maximizing sophistication.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders are strictly prohibited for sectioning. Use background shifts or "Tonal Carving" to define space. To separate a section, transition from `surface` (#0A0E14) to `surface-container-low` (#0E141C). The transition should be invisible to the casual eye but felt as a structural shift.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of dark, polished obsidian.
*   **Base:** `surface` (#0A0E14) – The infinite void.
*   **Secondary Plane:** `surface-container` (#121A25) – Primary content areas.
*   **Elevated Objects:** `surface-container-high` (#16202E) – Interactive cards or modals.

### The "Glass & Gradient" Rule
To achieve the "AI-powered" persona, use **Glassmorphism** for floating elements. Apply `surface-variant` (#1A2637) at 60% opacity with a `24px` backdrop-blur. 

**Signature Texture:** Main CTAs should not be flat. Use a subtle linear gradient from `primary` (#A7C8FF) to `primary-container` (#1F477A) at a 135-degree angle. This adds a "metallic sheen" reminiscent of high-end audio hardware.

---

## 3. Typography: The Editorial Voice
We utilize a dual-typeface system to balance high-tech utility with elegant chic.

*   **Display & Headlines (Manrope):** Use Manrope for all headers. Its geometric yet slightly condensed nature feels modern and authoritative. Use `display-lg` (3.5rem) with `-0.04em` letter-spacing for a "compressed" high-fashion look.
*   **Title & Body (Inter):** Inter provides clinical clarity. It is the "technical readout" of the agency.
*   **Hierarchy as Identity:** Scale is our primary tool. A `display-lg` headline paired immediately with a `label-md` small-caps sub-header creates an "Editorial Contrast" that feels expensive and custom.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, light does not come from "above"—it radiates from the content.

*   **The Layering Principle:** Avoid shadows on standard cards. Instead, place a `surface-container-highest` (#1A2637) element inside a `surface-container-low` (#0E141C) section. This "recessed" look is more sophisticated than a drop shadow.
*   **Ambient Shadows:** If an element must float (e.g., a dropdown), use a shadow with a `40px` blur, 0% spread, and 6% opacity, tinted with `primary` (#A7C8FF). This creates a "cool glow" rather than a "dark smudge."
*   **The Ghost Border:** For high-density data fields, use the `outline-variant` (#3C495B) at **15% opacity**. It should be a suggestion of a boundary, not a hard line.

---

## 5. Components: High-Tech Primitives

### Buttons (The "Control Switch")
*   **Primary:** Gradient fill (`primary` to `primary-container`), `md` roundedness (0.375rem), White text. No border.
*   **Secondary:** `surface-bright` (#1E2D41) background with `primary` (#A7C8FF) text.
*   **Tertiary:** Ghost style. No background. `secondary` (#9D9E9E) text that shifts to `primary` on hover.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins to create an avant-garde layout.
*   **Do** use `letter-spacing` on labels (0.05em) to give them a technical feel.
*   **Do** allow images to bleed off the edge of the screen.

### Don't:
*   **Don't** use pure black (#000000) except for extreme depth.
*   **Don't** use 100% opaque `outline` colors.
*   **Don't** overcrowding. Use more whitespace instead of dividers.
