---
name: Dóra Yoga
description: The Open-Air Atelier — a personal practice in warm ivory, plum, and lavender.
colors:
  paper: "#f5f1e9"
  plum: "#39263c"
  muted: "#6e596c"
  lavender: "#e4d9e7"
  line: "#cec2ca"
  on-plum-muted: "#d7c7d8"
  plum-hover: "#5a3e58"
  field-surface: "#f7f3f5"
  field-line: "#c6b6c6"
  field-placeholder: "#796575"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(58px, 6.3vw, 96px)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-0.038em"
  page-title:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(48px, 6vw, 88px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(38px, 4.1vw, 60px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.7
  button:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  square: "0px"
spacing:
  gutter: "clamp(24px, 4.1vw, 68px)"
  section: "clamp(76px, 8.4vw, 128px)"
components:
  button-primary:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "13px 25px"
  button-primary-hover:
    backgroundColor: "{colors.plum-hover}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.plum}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "13px 25px"
  button-light-hover:
    backgroundColor: "{colors.lavender}"
  text-link:
    textColor: "{colors.plum}"
    padding: "7px 0"
  text-link-light:
    textColor: "{colors.paper}"
    padding: "7px 0"
  enquiry-field:
    backgroundColor: "{colors.field-surface}"
    textColor: "{colors.plum}"
    rounded: "{rounded.square}"
    padding: "12px 13px"
  nav-dropdown:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "14px 23px"
    width: "245px"
  class-filter:
    textColor: "{colors.plum}"
    rounded: "{rounded.square}"
    padding: "10px 20px"
  class-filter-selected:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.paper}"
  event-sidebar:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.plum}"
    rounded: "{rounded.square}"
    padding: "35px"
  practice-tab:
    textColor: "{colors.plum}"
    rounded: "{rounded.square}"
    padding: "17px 0"
  schedule-row:
    textColor: "{colors.paper}"
    padding: "26px 0"
  faq-summary:
    textColor: "{colors.plum}"
    padding: "23px 0"
---

# Design System: Dóra Yoga

## Overview

**Creative North Star: "The Open-Air Atelier"**

A personal invitation into Dóra’s practice: warm paper, rich plum typography, quiet lavender fields, and actual photographs of the teacher, her community, and their surroundings. The user selected the direction with “Build the first preview — ivory and plum.”

The atmosphere is open, warm, and composed. Large serif headings, restrained italic emphasis, generous space, and crisp photography establish the character. Manrope makes supporting information and the path to booking easy to read. The recurring photograph overlaps and flat color fields give the site depth without surrounding every story in a card.

**Key Characteristics:**
- Original business photography with deliberate crops and useful alternative text.
- High-contrast serif headings paired with clear sans-serif information.
- Warm ivory, plum, and lavender in broad, flat fields.
- Rectangular controls, fine rules, and restrained interaction.

## Colors

The palette combines warm ivory with botanical plum and a pale lavender counterpoint. Frontmatter values are normative; the sidecar’s synthesized tonal ramps are preview metadata, not additional application tokens.

### Primary
- **Rich Plum** (`plum`): headings, primary actions, default text, and the schedule, community, and footer fields.
- **Softened Plum** (`plum-hover`): primary-button and social-link hover feedback.

### Secondary
- **Quiet Lavender** (`lavender`): retreat features, enquiry panels, facts bands, and the overlapping photograph caption; also the focus outline on dark fields.

### Neutral
- **Warm Ivory** (`paper`): the page canvas, light actions, and text on plum.
- **Muted Mauve** (`muted`): supporting copy, captions, and unselected practice tabs.
- **Pale Mauve Rule** (`line`): divisions between navigation, content, filters, and disclosures.
- **Lavender Ink on Plum** (`on-plum-muted`): secondary copy on dark sections.
- **Field Paper**, **Field Rule**, and **Field Placeholder**: the distinct light input surface, outline, and placeholder colors in the lavender enquiry panel.

**The Inverse Focus Rule.** Keep the lavender focus outline on plum fields; the default plum outline belongs on light surfaces.

## Typography

**Display Font:** Bodoni Moda, with Georgia and serif fallbacks. Normal and italic faces are self-hosted at weight (400).

**Body Font:** Manrope, with Arial and sans-serif fallbacks. Self-hosted weights are (400), (500), (600), and (700).

**Character:** Bodoni Moda supplies the expressive, spacious voice; Manrope carries practical information. Italic serif phrases remain part of the heading or quotation, with the same weight as the surrounding serif.

### Hierarchy
- **Display:** the home hero uses the `display` role. At mobile widths it changes to (`clamp(47px, 8.4vw, 68px)`, line-height `1.06`), with further narrow and wide overrides in the stylesheet.
- **Page title:** `page-title` is the base first-level heading. Service, event, and package openings have observed size overrides rather than a second font family.
- **Headline / Title:** `headline` and `title` provide the base second- and third-level headings; individual story headings range with their context.
- **Body:** `body` is the base. Most descriptive passages use relaxed line-height (`1.8–1.95`); paragraphs have a global maximum width (`68ch`). Mobile content commonly reduces to (`13–14px`), while enquiry fields increase to (`16px`).
- **Label:** `label` describes captions. Form labels are smaller and semibold (`12px`, weight `600`); time displays use tabular numerals. Uppercase styling is not a general label treatment.

## Layout

The standard wrapper is centered with a maximum width (`1512px`) and the fluid `gutter` spacing token. The header and home hero extend to (`1600px`). Section rhythm uses the `section` token; at widths up to (`760px`) it becomes (`76px`). There is no formal numeric spacing scale beyond these two custom properties.

Desktop layouts use editorial two-column grids, differing column proportions, and broad gaps. Portrait insets and the lavender photograph caption overlap deliberately. Content stays in normal document flow; long text and actions wrap.

Responsive changes are tied to the actual stylesheet: up to (`1150px`) gaps and type tighten; up to (`980px`) desktop navigation gives way to a menu, schedule content stacks, and the footer reduces columns. Up to (`760px`) the hero, stories, retreat feature, services, contact form, and event details become a single reading column. Up to (`370px`) gutters reduce to (`20px`) and small controls tighten. Above (`1600px`) the hero uses its explicit wide-screen sizing.

The sticky header measures (`92px`) on desktop, (`80px`) after navigation collapses, and (`76px`) on mobile. Anchor offsets account for it. Preserve these offsets when adding anchored sections.

## Elevation & Depth

The system is flat at rest. Broad plum and lavender fields, image cropping, fine dividers, and purposeful overlaps create depth. The single structural shadow is reserved for an open navigation dropdown (`0 12px 32px #39263c16`); cards and primary actions do not receive shadows.

**The Flat Story Rule.** Use whitespace, imagery, and rules to separate stories; reserve a filled container for an existing functional pattern such as an enquiry panel or event sidebar.

## Shapes

Controls, image frames, panels, filter buttons, and event status labels have square corners (`0px`). Borders are generally fine (`1px`). The portrait inset has an ivory frame that separates it from the larger photograph. Photo containers clip their crops; preserve each image’s observed focal positioning. The rounded browser scrollbar is a utility exception, not the component shape language.

## Components

### Buttons and links

Primary actions are rectangular plum controls with ivory text, a matching border, and a minimum height (`52px`). Light actions reverse the colors on dark fields. The shared padding and type are in frontmatter; header, calendar, and mobile contexts have smaller variants. Hover changes the fill, active state moves down (`1px`), and the arrow moves diagonally (`2px`) on hover. Text links use a fine underline with an offset (`6px`) and the same directional arrow.

Keyboard focus uses an outline (`2px`) offset (`5px`). Schedule, footer, and retreat-community sections override its color to lavender. Disabled buttons use reduced opacity (`0.65`) and a waiting cursor; no custom error-state button system is implemented.

### Navigation

The sticky ivory header carries the serif wordmark, grouped desktop links, and a booking action. Current links are underlined. Group buttons open an outlined ivory dropdown; Escape and outside clicks close it. The collapsed menu exposes a two-column link list, then a full-width action. Its open state is explicit through `aria-expanded`, and Escape returns focus to the menu toggle.

### Practice selector and filters

The signature three-way practice selector uses equal-width tabs and a fine baseline. The selected tab gains plum text, weight (`700`), and a bottom rule (`2px`); other tabs use muted text. Arrow keys, Home, and End move selection and focus. The active panel can receive keyboard focus with an offset (`8px`). Calendar and event filters are separate rectangular outlined buttons; selection fills them with plum and ivory, with `aria-pressed` exposing state.

### Stories, cards, and schedule rows

Practice and event stories use photographs followed by text without a raised card shell. Event status labels sit over their photographs. The event sidebar is a flat lavender panel using the padding in frontmatter; its position is sticky on larger screens and static on mobile. Weekly schedule rows sit directly on plum, divided by muted rules, with aligned day/time, serif class name, supporting details, and an arrow. Hover underlines the class title and shifts the arrow (`3px`).

### Enquiry fields

Visible labels precede lightly filled, square fields with an outline (`1px`), minimum height (`47px`), and the shared focus treatment. The textarea resizes vertically with a minimum height (`125px`). The lavender enquiry panel is padded (`45px`) on desktop and (`28px 22px`) on mobile. Native required, email, and length validation apply; there is no invented custom error or success color. Submission prepares a reviewable email draft, then shows the draft actions within the same panel.

### Disclosures and motion

FAQ entries use native details/summary controls separated by rules. The plus rotates (`45deg`) when open; answers remain ordinary readable text. Motion uses the shared easing (`cubic-bezier(.16,1,.3,1)`): action feedback (`0.2s`), arrow/disclosure feedback (`0.25s`), and image hover scaling (`0.8s`). The home photograph has one reveal (`1.1s`), changing its crop and saturation. Reduced-motion preference removes animation and transitions, restores the photograph, and disables smooth scrolling. Content does not depend on an entrance animation to become visible.

## Do's and Don'ts

### Do:
- **Do** use Dóra’s sourced photography, useful alt text, and intentional crops.
- **Do** pair Bodoni Moda headings with Manrope information and controls.
- **Do** preserve generous gutters, readable text widths, and the single-column mobile sequence.
- **Do** retain visible keyboard focus, the light outline on dark fields, and reduced-motion behavior.

### Don't:
- **Don't** replace the selected ivory and plum direction with a new palette or type pairing.
- **Don't** turn flat stories into rounded, shadowed cards.
- **Don't** hide essential content behind decorative animation or use stock imagery in place of the business photographs.
- **Don't** imply that an enquiry was sent when the interface has only prepared an email draft.
