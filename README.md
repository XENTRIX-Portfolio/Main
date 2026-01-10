# Xentrix Website

Premium, modern website for Xentrix - a South African IT company.

## Features

- 🚀 Next.js 14 with App Router
- ⚛️ TypeScript for type safety
- 🎨 Tailwind CSS with custom design system
- ✨ Framer Motion for smooth animations
- 📱 Fully responsive and mobile-first
- ♿ WCAG 2.1 AA accessible
- ⚡ Optimized for performance (Lighthouse ≥ 90)
- 🎯 GitHub integration for project showcase

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** EmailJS (configurable)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd XENTRIX
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables (optional for contact form):
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your EmailJS credentials if you want the contact form to work.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
XENTRIX/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Footer.tsx         # Footer component
│   └── sections/          # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── lib/                   # Utility functions
│   └── github.ts          # GitHub API integration
└── public/                # Static assets
    └── logo.jpg
```

## Configuration

### GitHub Integration

The Projects section fetches repositories from the `XENTRIX-Portfolio` GitHub organization. To customize which repositories are shown:

1. Edit `lib/github.ts`
2. Update the `CURATED_REPOS` array with repository names in priority order
3. If `CURATED_REPOS` is empty, the 9 most recently updated repositories will be shown

Data is fetched at build time and revalidates every 12 hours.

### Contact Form

The contact form uses EmailJS by default. To set it up:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service, template, and get your public key
3. Add the values to your `.env.local` file

Alternatively, you can modify `components/sections/Contact.tsx` to use Formspree or another service.

## Design System

### Colors

- Background: `#0A0A0A`
- Primary Accent: `#00B4D8`
- Secondary Accent: `#8B5CF6`
- Text: White and neutral greys

### Typography

- Font: Inter Variable
- Hierarchy achieved through size, weight, and spacing

### Glassmorphism

Glass effects are used on:
- Navigation bar (when scrolled)
- Project cards
- Contact form container

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables if needed
4. Deploy

## Performance Targets

- Lighthouse score: ≥ 90
- LCP: < 2.8 seconds
- CLS: < 0.1
- JavaScript bundle: < 250 KB (gzipped)

## Accessibility

The site follows WCAG 2.1 AA standards:

- Keyboard navigation
- Focus-visible states
- Semantic HTML
- ARIA labels where needed
- Contrast ratio ≥ 4.5:1
- Supports `prefers-reduced-motion`

## Browser Support

- Chrome (latest 2)
- Firefox (latest 2)
- Safari (latest 2)
- Edge (latest 2)

## Maintenance

- Dependency updates: Quarterly
- GitHub data: Auto-refreshes via rebuild (12-24 hour revalidation)
- Content updates: As needed

## License

Copyright © 2024 Xentrix. All rights reserved.
