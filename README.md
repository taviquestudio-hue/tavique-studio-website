# Tavique Studio website

A responsive, multi-page static website built with HTML, CSS and JavaScript.

## Pages
- Home: `/`
- About: `/about.html`
- Services: `/services.html`
- Who We Help: `/who-we-help/` (+ hotel, resort, villa pages)
- Our Work: `/our-work/` (+ Shrushti Sea Resort and creative work pages)
- Our Process: `/our-process/` (+ getting started)
- Insights: `/insights/` (+ two starter articles)
- Contact: `/contact.html`
- Privacy: `/privacy.html`

## Google Tag Manager
The standard GTM container snippet is installed in the `<head>` and the noscript iframe immediately after the opening `<body>` on every page, using container ID `GTM-W48LX433`. Verify it with Google Tag Assistant after deploying. Do not add the container a second time through a hosting plugin or another integration. Configure tags, triggers, consent and GA4/Meta/Google Ads destinations in GTM separately.

## Contact form
The form opens WhatsApp with a prefilled message to +91 88063 03987. It does not save submissions to a database or send email.

## Before public launch
1. Replace placeholder stock photos with client-approved property photos and actual creative work.
2. Confirm social profile URLs and add them to the footer if desired.
3. Review all copy, service scope and claims. No performance results or testimonials are fabricated.
4. Customize the privacy notice to reflect the actual tags/cookies, consent setup and data practices.
5. Configure a consent-management approach appropriate to the visitors and tools used.
6. Add canonical URLs, sitemap.xml, robots.txt, Open Graph images and production domain settings.
7. Test mobile navigation, dropdowns, WhatsApp form, page links and GTM in Tag Assistant.
8. Connect a domain and deploy to a static host (e.g. Netlify, Vercel or Cloudflare Pages).

## Run locally
Open `index.html` using a local static server. For example: `python -m http.server 8000` from this directory, then visit `http://localhost:8000`.

Images use remote Unsplash image URLs and therefore require internet access.
