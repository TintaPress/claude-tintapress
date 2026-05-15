# Tinta Press - Premium Publishing Partner Website

A modern, high-converting website for Tinta Press built with Next.js, React, and Tailwind CSS.

## Quick Start

1. Extract this folder
2. Open terminal in this folder
3. Run: `npm install`
4. Run: `npm run dev`
5. Visit http://localhost:3000

## Deploy to Vercel

1. Go to https://vercel.com
2. Sign up or log in
3. Click "Add New > Project"
4. Upload this folder or connect your GitHub repository
5. Vercel auto-detects Next.js and deploys automatically

## File Structure

```
├── pages/              # Next.js pages
│   ├── _app.jsx       # App wrapper
│   ├── _document.jsx  # HTML document
│   └── index.jsx      # Homepage (main component)
├── styles/            # Global styles
│   └── globals.css    # Tailwind CSS imports
├── public/            # Static files
│   └── data/
│       └── portfolio.json  # Portfolio items (edit to add your books)
├── package.json       # Dependencies
├── tailwind.config.js # Tailwind theme
├── next.config.js     # Next.js config
└── postcss.config.js  # PostCSS config
```

## Customization

### Update Contact Email
- Edit `pages/index.jsx` - replace `paul@tintapress.com` with your email

### Add Your Portfolio Books
- Edit `public/data/portfolio.json`
- Add your real book titles, authors, and categories

### Change Colors
- Edit `tailwind.config.js` to modify navy, gold, and cream colors

### Update Copy
- Edit `pages/index.jsx` to change any text on the site

## Support

For questions or issues, contact paul@tintapress.com

---

© 2026 Tinta Press. All rights reserved.
