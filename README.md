# Abhinand Krishna J | Cloud & DevOps Portfolio

Personal portfolio for an entry-level AWS Cloud / Cloud Support / DevOps candidate, built with Next.js (App Router) and Tailwind CSS. The hero shows the architecture of the AWS Three-Tier Web Application project. Dark mode follows the system setting.

## Tech stack
Next.js 14, React 18, Tailwind CSS 3, IBM Plex (via `next/font`). No API keys or environment variables.

## Run locally
Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Customize
- All text, links and skills: `data/content.js`
- Resume PDF: replace `public/Abhinand_Krishna_J_Resume.pdf` (keep the filename, or update `profile.resume`)
- Colors: CSS variables at the top of `app/globals.css`

## Deploy
Push to GitHub, then import the repository in Vercel. The framework is detected as Next.js, and no settings need changing.

## Structure
```
app/          layout.jsx, page.jsx, globals.css
components/  Header, Hero, Architecture, ProjectCard, Section
data/         content.js
public/       Abhinand_Krishna_J_Resume.pdf
```
