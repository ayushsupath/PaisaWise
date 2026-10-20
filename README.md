# PaisaWise

**Smart money, smarter you.**

An educational financial literacy website for Indian college students and first-job freshers. It combines three
Financial Markets & Institutions course modules with five modules on everyday money skills. The interface and
content are available in English and Hindi.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Advertisement / Poster

Open `/poster` (or `/#/poster`) to view the PaisaWise assignment advertisement. Choose A4 poster, square post,
story, or wide banner; use the EN / हिं controls to preview either language. Select **Download PNG**
to save the selected design at full resolution, or choose the A4 poster and use **Print / Save PDF**.
Enable **Background graphics** in the print dialog for the intended colours.

Check lesson and translation data before submitting:

```bash
npm run check:content
```

## Deploy

Vercel and Netlify are already configured for the SPA fallback (`vercel.json` and `public/_redirects`). Build with
`npm run build` and use `dist/` as the output directory. For GitHub Pages, add a `404.html` copy of `index.html`
so client-side routes fall back to the app. The legacy `/#/poster` redirect still works.

## Project structure

- `src/pages/` — Home, Learn, Quiz, Budget, Market Lab, About, and Poster
- `src/data/lessons/` — Source-of-truth English lessons across eight modules
- `src/data/hi/` — Hindi lesson, quiz, and Market Lab counterparts; missing fields fall back to English
- `src/lib/i18n.jsx` and `src/i18n/` — Language provider and English/Hindi UI strings
- `src/data/quizQuestions.js` — PaisaWise IQ question bank
- `src/data/marketLab.js` — Hypothetical money-market simulator data

## Adding content

Lessons use the existing schema in `src/data/lessons/moduleN.js`: `id`, unique `slug`, `moduleId`,
`moduleTitle`, `category`, `title`, `difficulty`, `definition`, `whyItMatters`, `characteristics`,
`example`, `rememberThis`, and `mcqs`. Each MCQ has `question`, `options`, `correctIndex`, and `explanation`.
Add the lesson to its module export and register that module in `src/data/lessons/index.js`.

Add the matching Hindi entry under the same slug in `src/data/hi/lessons.hi.js`. Translate all lesson and quiz
fields, keep option order and `correctIndex` identical, and use English fallbacks only for terms commonly used
in Hindi finance conversations. Add interface copy to both `src/i18n/ui.en.js` and `src/i18n/ui.hi.js` using
the same dotted key. `npm run check:content` checks unique slugs, module references, translation entries, and
MCQ structure.

## Disclaimer

PaisaWise is for education only and is not financial advice. Examples are illustrative; verify current tax,
regulatory, scheme, and product terms with official sources.
