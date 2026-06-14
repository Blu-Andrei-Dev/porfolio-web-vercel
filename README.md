# Blu Andrei Chumbingco - .NET + React JS Portfolio

A React + Vite portfolio customized for Blu Andrei R. Chumbingco and positioned for mid-to-senior .NET, React, application developer, API integration, and middleware roles.

## What is included

- React + Vite single-page portfolio
- First design direction: clean, professional, dark, recruiter-friendly portfolio layout
- Resume-based content for profile, experience, skills, projects, education, certifications, and contact details
- Selected project sections for EIS, API Adapter, IClick 3.0 / eCebuana, and LIS Legacy Application Support
- Local resume PDF inside `public/Blu_Andrei_Chumbingco_Resume.pdf`
- Data-driven content file so you can edit portfolio copy without changing most component logic

## Project structure

```text
dotnet-react-portfolio/
  index.html
  package.json
  vite.config.js
  public/
    Blu_Andrei_Chumbingco_Resume.pdf
    site.webmanifest
  src/
    App.jsx
    main.jsx
    styles.css
    data/
      portfolio.js
```

## How to run locally

Use Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build for production

```bash
npm run build
npm run preview
```

The production output will be generated in `dist/`.

## How to customize before applying

Most of the content is inside:

```text
src/data/portfolio.js
```

Update these first:

1. `candidate.github`
2. `candidate.linkedin`
3. Project impact details if you have measurable results
4. Any confidential project wording that should be generalized further
5. Current availability and target role wording

## Important content advice

The current project descriptions avoid fake metrics. Before sending this portfolio to recruiters, add only numbers you can confidently defend in interviews, such as:

- Report processing time reduced from X to Y
- Background job throughput improved by X percent
- Manual work reduced by X hours per week
- Supported X records, users, branches, services, or transactions
- Delivered X modules or releases

## Deployment options

You can deploy the built `dist/` folder to Netlify, Vercel, GitHub Pages, Azure Static Web Apps, or any static hosting provider.
