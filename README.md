# Aniimo Wiki

Fan-made community wiki for **Aniimo** (Pawprint Studio — free-to-play creature-catching open-world RPG, launches Sep 15, 2026).

- Live site: https://aniimo-wiki.wiki
- Deploy: Cloudflare Workers Builds (Git integration) — v1.0.0
- Build: `corepack enable && pnpm install --frozen-lockfile && pnpm run build`

## 部署
Cloudflare Worker Static Assets + **CF 原生 Worker Builds Git 集成**（push main → 自动构建+部署）。
