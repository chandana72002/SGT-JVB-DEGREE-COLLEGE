# S G T & J V B Degree College Website

## Project Overview

This project is a static, responsive college website built for **S G T & J V B Degree College (149)** using **React**, **Vite**, and **Tailwind CSS**.  
It includes multiple public-facing pages for academics, admissions, campus life, placements, anti-ragging information, and contact details.

Important scope:

- Static frontend only
- No backend
- No database
- No authentication
- No admin dashboard
- No API integrations

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router

## Setup Commands

```bash
npm install
```

## Development Command

```bash
npm run dev
```

## Build Command

```bash
npm run build
```

## Deployment

### Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Set the framework preset to `Vite` if needed.
4. Use the default build command `npm run build`.
5. Use the output directory `dist`.
6. Deploy.

### Netlify

1. Push the project to GitHub.
2. Import the repository into Netlify.
3. Set build command to `npm run build`.
4. Set publish directory to `dist`.
5. Deploy the site.

### cPanel

1. Run `npm install`.
2. Run `npm run build`.
3. Open the generated `dist` folder.
4. Upload the contents of `dist` to your cPanel public site directory such as `public_html`.
5. If needed, configure rewrite rules so client-side routes resolve to `index.html`.

## Static Data Update Guide

All website content is managed through files in [src/data](./src/data).

- `collegeInfo.js`: institution profile, address, contact details, map URL, stats
- `departments.js`: department cards
- `courses.js`: course cards
- `faculty.js`: principal and faculty profiles
- `facilities.js`: facility cards
- `events.js`: event cards
- `gallery.js`: gallery items
- `achievements.js`: achievement content
- `testimonials.js`: testimonial cards
- `visionMission.js`: vision, mission, and core values
- `antiRagging.js`: anti-ragging sections

Update the exported arrays or objects in these files to change website content.

## Image and Logo Replacement

- Main logo file: [src/assets/images/college-logo.svg](./src/assets/images/college-logo.svg)
- Favicon file: [public/favicon.svg](./public/favicon.svg)

To replace the logo:

1. Add your new image file to `src/assets/images/`.
2. Update the import in `src/data/collegeInfo.js`.
3. If you want the browser tab icon updated too, replace `public/favicon.svg` or point `index.html` to a new favicon file.

To replace gallery images:

1. Add image files into `src/assets/images/` or use approved image URLs.
2. Update the entries inside `src/data/gallery.js`.

## Notes

- The contact form is static UI only and does not submit anywhere.
- Dropdown navigation, mobile menu, active links, and page title updates are already included.
- The current departments, courses, faculty, events, gallery, achievements, and testimonials are editable sample content where official details were not provided.
