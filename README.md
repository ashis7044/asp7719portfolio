# Portfolio Website

A modern, responsive portfolio website built with cutting-edge 2026 technologies for an Electrical & Computer Engineering graduate.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)

## ✨ Features

- **Modern Design**: Glassmorphism effects, smooth animations, and gradient accents
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive**: Mobile-first design that looks great on all devices
- **Animated**: Smooth scroll animations powered by Framer Motion
- **Blog Support**: MDX-powered blog with code highlighting and rich content
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Fast**: Turbopack for instant development builds
- **Accessible**: WCAG compliant with proper focus management

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 11](https://www.framer.com/motion/)
- **Content**: [MDX](https://mdxjs.com/) for flexible content management
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home/Hero section
│   ├── about/             # Bio and background
│   ├── experience/        # Academic & work experience
│   ├── projects/          # Portfolio projects
│   ├── blog/              # Blog listing & posts
│   └── contact/           # Contact form
├── components/            # Reusable React components
│   ├── ui/                # Base UI components
│   ├── layout/            # Navigation, Footer
│   └── providers/         # Theme provider
├── content/               # MDX content files
│   ├── blog/              # Blog posts
│   └── projects/          # Project descriptions
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── images/            # Image files
│   ├── videos/            # Video files
│   └── documents/         # PDFs and documents
└── .github/               # GitHub configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Personal Information

1. Update your name and bio in `app/page.tsx` and `app/about/page.tsx`
2. Modify social links in `components/layout/navigation.tsx` and `components/layout/footer.tsx`
3. Add your resume to `public/documents/resume.pdf`
4. Update contact information in `app/contact/page.tsx`

### Adding Content

#### Blog Posts
Create MDX files in `content/blog/`:
```mdx
---
title: "Your Post Title"
date: "2025-01-15"
tags: ["tag1", "tag2"]
---

Your content here...
```

#### Projects
Add projects in `app/projects/page.tsx` or create MDX files in `content/projects/`

### Styling

- Global styles: `app/globals.css`
- Theme colors: CSS variables in `globals.css`
- Component styles: Tailwind classes in components

## 🎨 Design System

### Colors
- Primary: Blue (#3B82F6)
- Secondary: Purple (#A855F7)
- Gradients: Blue → Purple → Pink

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, gradient text effects
- Body: Regular, high contrast

### Effects
- Glassmorphism with backdrop blur
- Smooth scroll animations
- Hover transitions
- Custom scrollbar

## 📦 Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations
- [Lucide](https://lucide.dev/) for the icon library

---

Made with ❤️ by [Your Name]
