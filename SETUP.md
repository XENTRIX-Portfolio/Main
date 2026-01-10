# Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables (optional for contact form):**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   
   Or use Formspree by modifying `components/sections/Contact.tsx`

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Configuration

### GitHub Integration

The Projects section automatically fetches repositories from the `XENTRIX-Portfolio` GitHub organization. 

To customize which repositories are shown:

1. Open `lib/github.ts`
2. Edit the `CURATED_REPOS` array:
   ```typescript
   const CURATED_REPOS = [
     'repo-name-1',
     'repo-name-2',
     'repo-name-3',
     // ... add up to 9 repository names in priority order
   ]
   ```

If `CURATED_REPOS` is empty, the 9 most recently updated repositories will be displayed.

### Contact Form Setup

#### Option 1: EmailJS (Current Implementation)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service (e.g., Gmail)
3. Create an email template
4. Get your public key
5. Add credentials to `.env.local`

#### Option 2: Formspree

1. Sign up at [Formspree](https://formspree.io/)
2. Create a form
3. Modify `components/sections/Contact.tsx` to use Formspree's endpoint

## Customization

### Colors

Edit CSS variables in `app/globals.css`:
```css
:root {
  --background: #0a0a0a;
  --primary: #00b4d8;
  --secondary: #8b5cf6;
  /* ... */
}
```

### Content

- Hero section: `components/sections/Hero.tsx`
- About section: `components/sections/About.tsx`
- Services: `components/sections/Services.tsx`
- Contact email: `components/sections/Contact.tsx` (line 232)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in project settings
4. Deploy

The site will automatically rebuild when you push to the main branch.

## Troubleshooting

### GitHub API Rate Limits

If you hit rate limits, the Projects section will show an empty state. The API fetches data at build time, so rate limits shouldn't be an issue during normal use.

### Contact Form Not Working

1. Verify environment variables are set correctly
2. Check browser console for errors
3. Ensure EmailJS service and template are configured correctly
4. Check that public key has proper permissions

### Build Errors

- Ensure Node.js 18+ is installed
- Delete `node_modules` and `.next` folders, then reinstall:
  ```bash
  rm -rf node_modules .next
  npm install
  ```
