# Portfolio

Personal portfolio site with a blog, built with SvelteKit. Deployed to Vercel (GitHub Pages may be added later as a secondary static target).

- **Package manager:** pnpm (always use `pnpm`, not `npm`/`yarn`, to keep the lockfile consistent)
- **Language:** TypeScript
- **Styling:** plain CSS in `frontend/src/app.css` — no CSS framework, no animation library. The design is deliberately a document: system fonts, one measure, hairline rules.
- **Adapter:** `@sveltejs/adapter-vercel`, pinned to `runtime: 'nodejs22.x'` in `frontend/svelte.config.js` (the adapter can't infer a runtime from unreleased local Node versions, so it's set explicitly rather than left on auto-detect)
- **Testing:** Vitest (`pnpm run test`)
- **Dev server:** run `cd frontend && pnpm run dev` (default URL: http://localhost:5173). For a production build check: `pnpm run build && pnpm run preview` from `frontend/`.

## Layout

- `frontend/` — the SvelteKit site (this is the primary app; see conventions below).
- `docs/` — misc reference docs (e.g. `docs/resume.md`), not app code.

## SvelteKit conventions

- `frontend/svelte.config.js` holds the SvelteKit config (preprocess + adapter); `frontend/vite.config.ts` holds the SvelteKit plugin and the Vitest config. Adapter config belongs in `svelte.config.js`, not `vite.config.ts`.
- Prefer `+page.server.ts` load functions for data that doesn't need client-side reactivity (e.g., blog post lists) over client-side `fetch`.
- Use `$lib` for shared code, not relative `../../` imports.
- Use `resolve()` from `$app/paths` for internal `href`s (e.g., `resolve('/blog/[slug]', { slug })`), not raw template strings — it keeps links type-checked against real routes. Nothing lints this automatically (eslint-plugin-svelte 2.x has no such rule), so it is on you to follow.
- Keep components small and colocate route-specific logic in `+page.server.ts`/`+page.ts` rather than pushing everything into `+page.svelte`.
- Favor SvelteKit's SSR-by-default behavior; don't reach for client-only rendering unless a feature genuinely requires it.

## Blog

- Posts are stored as local Markdown files in `frontend/src/content/posts/` and loaded by `frontend/src/lib/server/blog.ts`.
- `frontend/src/routes/blog/` renders posts for visitors. Publishing is done by adding or editing a Markdown file; there is no in-app admin UI.
- `frontend/src/lib/types/post.ts` has the shared `Post`/`PostSummary` types.
- Post content is markdown, rendered server-side by `frontend/src/lib/markdown.ts` (marked + xss sanitising) and injected with `{@html}`.
- Project briefs on the homepage live in `frontend/src/lib/projects.ts`; `brief` is markdown.

## General dev practices

- Before considering frontend work done, run from `frontend/`: `pnpm run check` (types), `pnpm run lint` (Prettier + ESLint), and `pnpm run test` if logic changed.
- No premature abstractions — this is a personal portfolio, not a platform. Don't build for hypothetical future requirements (multi-author blog, CMS integration, i18n) unless asked.
- Commit messages: short, imperative, explain why not just what.

## For agent sessions (token efficiency)

- Never read `frontend/node_modules/`, `frontend/.svelte-kit/`, or `frontend/build/` — they're generated/vendored. Use `pnpm run check`/`lint` output instead of grepping through them.
- Prefer targeted greps or reading a specific known file over listing/reading whole directories.
- Start the dev server with `cd frontend && pnpm run dev` rather than re-deriving the command each session.
- Keep diffs scoped to what's asked — this is a small personal project, not a codebase that benefits from speculative refactors.
- When verifying a change works, prefer `pnpm run check`/`build` (fast, deterministic) over spinning up the dev server and screenshotting, unless the change is visual/interactive.
