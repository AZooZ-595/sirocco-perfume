# SIROCCO — Perfume Landing Page & Market Research

A self-contained portfolio case study in two parts:

1. **Research** — analysed the strongest men's perfume websites (global DTC + niche/indie), built a weighted scoring system, ranked them, picked the top 3, deep-dived *why* they convert, and contrasted them with weak-site failure patterns.
2. **Build** — distilled the findings into design principles and used them to design and hand-code a single-product luxury landing page for a fictional fragrance, **SIROCCO**.

> 🔗 **Live demo:** see the GitHub Pages link in the repository **About** section.

## What's inside

| Path | What it is |
|------|------------|
| [`index.html`](index.html) | Landing page linking the demo and the research report |
| [`site/`](site/) | The built **SIROCCO** product page — `index.html`, `styles.css`, `script.js`, `assets/` |
| [`research/report.html`](research/report.html) | Interactive research report — scoring tables, rankings, deep dive, do/don't |
| [`research/data/scoring.json`](research/data/scoring.json) | Raw scoring data (criteria, weights, 10 sites, weak archetypes) |
| [`research/screenshots/`](research/screenshots/) | Reference screenshots of the analysed sites |

## The scoring system

Ten sites scored 1–10 across eight weighted criteria → a `/100` total:

| Criterion | Weight |
|-----------|:-----:|
| Hero section & visual design | 20% |
| UX/UI & navigation | 15% |
| Branding (colour / type / identity) | 15% |
| Copywriting & scent storytelling | 15% |
| Notes presentation (top / mid / base) | 10% |
| Social proof & reviews | 10% |
| Perceived speed / performance | 10% |
| Conversion & CTA / PDP flow | 5% |

**Top 3:** Snif · Commodity · D.S. & Durga.

## The product — SIROCCO

A fictional niche men's *extrait de parfum*. One signature scent: saffron and black pepper at the gate, oud and incense in the heart, amber and worn leather on the skin. The whole site applies the research: a strong atmospheric hero, a deliberate section order, a three-act notes arc, social proof, a sampling-led CTA, and a consistent desert-noir identity.

## Tech

Vanilla **HTML / CSS / JavaScript** — no framework, no build step. Fully responsive, with scroll-reveal, an animated reviews marquee, a size selector, a sticky mobile buy bar, and a FAQ accordion. Portable to Shopify Liquid.

## Run locally

Open [`index.html`](index.html) in any browser — no build or server required.

---

*Concept, research, design and code by [@AZooZ-595](https://github.com/AZooZ-595). SIROCCO is a fictional brand created for this portfolio demonstration.*
