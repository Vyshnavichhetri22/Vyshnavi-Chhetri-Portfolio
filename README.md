# Vyshnavi Chhetri — Portfolio

A modern, premium personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Designed to showcase skills, projects, and experience as a Software Engineer Intern.

## Features

- Premium glassmorphism UI with aurora gradients
- Dark & light mode toggle
- Fully responsive (mobile, tablet, laptop, desktop)
- Sticky navbar with scroll spy & mobile hamburger menu
- Animated hero with typing effect & layered profile image
- Scroll-triggered section animations
- Loading screen, scroll progress bar & animated cursor
- SEO optimized with meta tags & Open Graph
- Ready for GitHub & Vercel deployment

## Tech Stack

| Category    | Technology        |
| ----------- | ----------------- |
| Framework   | React.js (Vite)   |
| Styling     | Tailwind CSS v4   |
| Animations  | Framer Motion     |
| Icons       | React Icons       |
| Routing     | React Router      |
| Deployment  | Vercel            |

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── resume.pdf          # Add your resume here
├── src/
│   ├── assets/
│   │   ├── profile-placeholder.svg
│   │   └── projects/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, Loading, etc.
│   │   ├── sections/       # Hero, About, Skills, etc.
│   │   └── ui/             # Button, SectionHeading, etc.
│   ├── hooks/              # useTheme, useScrollSpy, etc.
│   ├── pages/              # Home page
│   ├── utils/              # Data, animations, constants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vercel.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Customization Guide

### 1. Profile Photo

Replace the placeholder in `src/assets/profile-placeholder.svg`:

1. Add your photo as `src/assets/profile.jpg`
2. Update the import in `src/components/sections/Hero.jsx`:

```jsx
import profileImage from '../../assets/profile.jpg'
```

### 2. Resume

Add your resume PDF to `public/resume.pdf`. The download buttons will work automatically.

### 3. Personal Info

Update `src/utils/constants.js`:

- Email, phone, location
- LinkedIn & GitHub URLs
- Resume path

### 4. Projects

Update `src/utils/data.js`:

- GitHub repository URLs
- Live demo URLs
- Replace project screenshots in `src/assets/projects/`

### 5. SEO & Domain

Update URLs in:

- `index.html` (canonical, Open Graph)
- `public/robots.txt`

## Deployment

### GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Import your portfolio repository
4. Vercel auto-detects Vite — keep default settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**

Your site will be live at `https://your-project.vercel.app`.

#### Custom Domain (Optional)

1. In Vercel project settings → **Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. Update canonical URLs in `index.html` and `robots.txt`

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`  | Run linter               |

## License

This project is open source and available for personal use.

---

Built with passion by **Vyshnavi Chhetri**
