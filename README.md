# Website Caplan Foundation for Early Childhood

[![Netlify Status](https://api.netlify.com/api/v1/badges/0cf04163-041e-431f-a1f8-a1b7ecfb7ceb/deploy-status)](https://app.netlify.com/sites/euphonious-naiad-8da570/deploys)

## What's new in 2.0.0.
- **navigation** in-page navigation that updates with "scroll spy" (Intersection Observer API), smooth scrolling (no longer needing dependencies or scripting) with deep linking to sections.
- **realigned design** content tweaks, better responsive design,
- **code rewrite** the previous code was over a decade old, and used some dependencies that are no longer being developed
- **animations** disabled for users who indicate the OS preference they rather wouldn't have them. Scroll driven animation, intersection observer.
- **dark mode** follows OS preference
- **responsive images**
- **static generation**
- **cron job for site generation**
- **single source of truth** simple data structures using YAML, frontmatter, 
- **[social media share preview cards](https://www.opengraph.xyz/url/https%3A%2F%2Fearlychildhoodfoundation.org)**
- minimal use of clientside JS (progressive enhancement, no real dependency)
- ***

## Technologies Used

- 11ty with nunjucks templating
- Web standards

## Deployment

Anything pushed to Github on the `main` branch triggers Netlify build and deployment to production.

A GitHub action will trigger additional builds based on a cron job that rebuilds the site after each LOI expiration deadline. Please note that the cron job needs to be manually updated if the deadlines are ever changed

## npm scripts

- `build` used on the Netlify server to build the site and CSS
- `serve` watches the filesystem for changes for development, use in conjunction with the `css` script
- `css` uses TailwindCSS to build the CSS
- `debug`˝

## DNS and Email domain forwarding

The DNS records are set on Netlify. Unfortunately, I can't point MX / TXT records there to Google's servers, as it's not supported with GMail (unless you pay for Workspaces). Therefor, [improvMX](https://improvmx.com/) is used as an intermediary.
˝