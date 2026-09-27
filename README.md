# Kaatib Yusuf — Personal Website

A static HTML/CSS/vanilla-JS site. No build step, no framework, no dependencies.

## Running it locally

Any static file server works, e.g.:

    python3 -m http.server 8000

Then open http://localhost:8000/index.html

## Deploying it

Upload the contents of this folder to any static host (Netlify, Vercel,
GitHub Pages, a plain Apache/Nginx server, etc). Nothing needs building.

Before going live:
1. Update `hello@kaatibyusuf.com` and the social links in `js/build_pages`-generated
   pages (search each HTML file, or edit them at the source in `js/data.js` /
   the header/footer partials if you regenerate — see "Editing content" below).
2. Replace `https://kaatibyusuf.com` in `sitemap.xml`, `robots.txt`, and each
   page's `<link rel="canonical">` / Open Graph tags with your real domain.
3. Add real author/book/project photography under `assets/images/` and swap
   the typographic placeholders (`.book-cover`, `.about-photo`, etc.) for
   `<img>` tags.

## Editing content

Everything — articles, books, projects, journal entries, library items,
thinking notes, and the "Currently" section — lives in one file:

    js/data.js

Add a new article by adding an object to the `articles` array (unique
`slug`, `content` as an array of blocks — see the comment at the top of the
file for the block types: `p`, `h2`, `h3`, `quote`, `list`). The same pattern
applies to `projects`, `books`, and `journalEntries`. Nothing else needs to
change — list pages, detail pages, search, and the sitemap-generation script
all read from this file.

Anything marked with the `.placeholder` CSS class (shown in italics with a
dash) is content that was intentionally left for you to fill in rather than
invented — reader counts, background bio, testimonials, etc.

## Regenerating pages after structural changes

The HTML pages were assembled by a small Python script (`build.py` +
`build_pages.py`, not included in this delivery since they're a one-time
scaffolding tool) that shares header/footer/nav markup across every page.
If you want to change the navigation, footer, or `<head>` boilerplate across
the whole site by hand, you'll need to edit it in every HTML file — there's
no templating at runtime, by design, per the "no build tool" requirement.
If that becomes painful as the site grows, the natural next step is a static
site generator (11ty, Astro) or a headless CMS, which the content structure
in `data.js` is already shaped to migrate into cleanly.

## Architecture notes

- **CSS**: `variables.css` holds every design token (colors, type, spacing).
  Change the look of the whole site from that one file.
- **JS**: `data.js` is the only file with content. `render.js` has shared
  HTML-string builders. `theme.js`, `navigation.js`, `search.js`,
  `filters.js`, `article.js` are single-purpose behavior modules.
  `js/pages/*.js` are per-page render scripts.
- **URLs**: detail pages use `?slug=` query params (e.g.
  `article.html?slug=why-good-writers-read-aggressively`) rather than clean
  path-based URLs, since this is a plain static site with no server-side
  routing. If your host supports redirects/rewrites (Netlify, Vercel,
  Cloudflare Pages all do), you can add rules mapping
  `/writing/:slug` → `/article.html?slug=:slug` (and similarly for
  `/books/:slug`, `/work/:slug`, `/journal/:slug`) to get clean URLs without
  changing any site code.
- **Dark mode**: persists via `localStorage`, falls back to
  `prefers-color-scheme`.
- **Accessibility**: skip link, visible focus states, semantic headings,
  reduced-motion support, keyboard-operable search and mobile nav.
