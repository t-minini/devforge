# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is the marketing website for devForge.ie, built with Create React App (react-scripts 5.0.1). It is a single-page site: a fixed set of sections rendered in order and navigated via smooth-scroll anchor links, not client-side routing.

Live site: https://devforge-ie.netlify.app/

## Commands

- `npm start` — run the dev server (CRA default, http://localhost:3000)
- `npm run build` — production build to `build/`
- `npm test` — run tests via `react-scripts test` (Jest + React Testing Library, watch mode by default)
- `npm test -- --watchAll=false` — run tests once (CI-style)
- `npm test -- ComponentName` — run tests matching a filename/pattern
- There is no separate lint script; ESLint runs through CRA's build/dev process using the `react-app` / `react-app/jest` config in `package.json`.

## Architecture

- `src/index.js` mounts `App` into `#root`.
- `src/App.js` composes the entire page as a flat list of top-level section components, in this exact order: `Navbar`, `Hero`, `Why`, `Who`, `What`, `Mission`, `Footer`.
- Each section lives in `src/components/<name>/` as a pair: `<Name>.jsx` (component) + `<Name>.module.css` (CSS Module, imported as `style` and referenced via `style.someClass`).
- Section-to-section navigation uses `react-scroll`'s `<Link>` (spy + smooth scroll) targeting element IDs that match the section names (`hero`, `why`, `who`, `what`, `mission`, `footer`) — see `src/components/navbar/Navbar.jsx`. When adding or renaming a section, keep the scroll-target id and the `Link to=` value in `Navbar.jsx` in sync.
- Static assets (logos, before/after screenshots, "what" section images) live under `src/assets/images/`, imported directly into components as ES module imports.
- No global state management, routing library, or API layer — this is a static content site.

## Dependency notes

- `package.json` has an `overrides` block pinning several transitive dependencies (`nth-check`, `postcss`, `follow-redirects`, `express`, `webpack`, `ws`, `serialize-javascript`, etc.) to patched versions. These exist to resolve GitHub security alerts on CRA's transitive dependency tree — check recent commit history before loosening or removing an override, since several were added specifically in response to security advisories.
