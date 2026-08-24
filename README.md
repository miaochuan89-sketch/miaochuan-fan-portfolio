# Miaochuan Fan — Portfolio

An interactive portfolio for Miaochuan Fan, an architecture-trained spatial and environment designer working across real-time environments, worldbuilding and AI-assisted visual development.

**Live portfolio:** [miaochuan-fan-portfolio.miaochuan89.chatgpt.site](https://miaochuan-fan-portfolio.miaochuan89.chatgpt.site/)

## Portfolio focus

- Architecture, landscape and spatial research
- Real-time environments and cinematic worldbuilding
- Modular systems and experience design
- AI-assisted visual development workflows
- Selected academic, professional and experimental work

## Experience

1. The landing page introduces the portfolio through an interactive 3×3 image cube.
2. Moving across the project index changes the featured typography and cube emphasis.
3. Selecting a project scrolls vertically to its full presentation section.
4. Each project contains its own horizontal media track for drawings, images and process work.
5. The layout supports mouse, trackpad, keyboard and touch interaction.

## Current project index

- Real-time Environment
- UCLA Spatial Research
- Modular Energy Landscape
- Agence TER
- AI Visual Development
- Urban Narrative — placeholder
- Material Study — placeholder
- Adaptive Housing — placeholder
- Experimental Archive — placeholder

## Technology

- TypeScript
- React 19
- Next.js-compatible App Router powered by [vinext](https://github.com/cloudflare/vinext)
- Vite and Cloudflare Workers
- Responsive, dependency-light CSS

## Run locally

Requires Node.js `>=22.13.0` and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Project structure

```text
app/
  globals.css          Responsive visual and interaction system
  layout.tsx           Site metadata and root layout
  page.tsx             Landing page and project presentation flow
  projects.ts          Project index and placeholder content
  work/                Optional project routes
public/                Brand and social-preview assets
```

## Content status

The interaction system and responsive layouts are in place. Several media panels and project entries intentionally use placeholders until final portfolio imagery, drawings and project descriptions are added.
