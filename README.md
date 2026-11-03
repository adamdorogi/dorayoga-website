# Dóra Yoga

A complete English redesign of Dora Yoga / Inner Alchemy Space, built with Next.js 16, TypeScript and the App Router.

## Development

- Install: `npm install`
- Run: `npm run dev`
- Type check: `npm run typecheck`
- Production static export: `npm run build` (output in `out/`)

The project self-hosts its fonts and uses optimized photographs from the original business website. No image-generation output is used as a photograph on the finished site.

## Booking and enquiries

All class and package purchases go to the existing Gymcatch account. No local booking is accepted and no payment is processed by this site. Contact links open email, phone, WhatsApp and the original social profiles. A structured enquiry tool creates an editable email draft; it never pretends a message was submitted.

The live calendar uses the existing public Gymcatch embed key from the original site and loads only when the visitor requests it. The direct Gymcatch link is always available.

## Content and sources

- Main source: https://www.dorayoga.net/
- Page inventory: original sitemap plus the navigation's private-bookings page.
- Business location: https://maps.app.goo.gl/hsifgQavcvMvqJbW7
- Studio: Healing Home, Pozsonyi út 54, 1137 Budapest.
- Research snapshots: `.research/original-site.json` and `.research/image-origins.json`.
- Website content: `src/lib/content.ts`.

Content was checked on 3 November 2026. The live packages page says **five sessions for 22,000 HUF**, while an older cached search result described five for the price of four. The current live price is used. Dates, prices and availability should always be confirmed in Gymcatch. Past events are archived; the May 2027 Bosnia retreat is treated as upcoming. The original store has no listed products, so the store page presents that state honestly with links to the existing class package and private sessions.

Reiki and similar practices are described as spiritual/complementary experiences, without repeating unverified medical efficacy claims from the original website.

## Original routes retained

- `/` and `/home/`
- `/yoga-classes-and-events-budapest/`
- `/yoga-styles/`
- `/yoga-packages/`
- `/private-yoga/`
- `/private-bookings/`
- `/events-and-retreats/`
- `/events-and-retreats/szivter-noi-kor/`
- `/events-and-retreats/joga-a-lovardban/`
- `/events-and-retreats/kek-lotusz/`
- `/events-and-retreats/fnycsoport-egysg-ben-az-er/`
- `/reiki/`
- `/women-circles/`
- `/contact/`
- `/store/`

Added pages provide an introduction to Dóra, sound bath information and individual retreat detail pages. All original public pages remain reachable from the navigation, footer or event archive.
