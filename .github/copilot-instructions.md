# Portfolio Website - Copilot Instructions

## Project Overview
Modern portfolio website for an Electrical and Computer Engineering graduate built with cutting-edge 2026 technologies.

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.4+
- **Styling**: Tailwind CSS 4 with custom design system
- **Animations**: Framer Motion 11
- **Content**: MDX for flexible blog/content management
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Media**: Support for videos, images, PDFs, embeds

## Project Structure
```
/app                    # Next.js App Router pages
  /page.tsx            # Home/Hero section
  /about/page.tsx      # Bio and background
  /experience/page.tsx # Academic & work experience
  /projects/page.tsx   # Portfolio projects
  /blog/page.tsx       # Blog listing
  /blog/[slug]/page.tsx # Individual blog posts
  /contact/page.tsx    # Contact form
/components            # Reusable React components
  /ui                  # Base UI components
  /sections            # Page sections
  /layout              # Layout components
/content               # MDX content files
  /blog                # Blog posts
  /projects            # Project descriptions
/lib                   # Utility functions
/styles                # Global styles
/public                # Static assets
  /images              # Image files
  /videos              # Video files
  /documents           # PDFs and documents
```

## Design System
- Glassmorphism effects with backdrop blur
- Smooth scroll animations
- Gradient accents
- Dark/light theme support
- Responsive mobile-first design
- Modern typography with Inter font

## Content Guidelines
- Blog posts support: text, images, videos, code blocks, embeds
- Projects can include: descriptions, tech stack, links, media
- Academic section: courses, GPA (optional), achievements
- Skills displayed with visual progress indicators

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
