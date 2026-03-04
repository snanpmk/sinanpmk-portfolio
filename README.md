# 🧑‍💻 Sinan's Portfolio

A modern, high-performance personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Features a sleek dark-mode design with glassmorphism UI, smooth Framer Motion animations, a parallax hero section, and a functional contact form powered by Resend.

---

## ✨ Features

- **Parallax Hero Section** — Immersive layered parallax scroll effect with animated background shapes
- **Mini-Dashboard Layout** — Hero cards showcasing role, tech stack, featured project, and experience at a glance
- **Glassmorphism UI** — Reusable `GlassCard` component with backdrop blur, subtle borders, and depth
- **Smooth Animations** — Framer Motion powered entrance animations, hover effects, and micro-interactions
- **Mouse Spotlight** — Interactive cursor spotlight effect for a premium feel
- **Sections**: Hero, About, Skills, Experience, Projects, Education, Testimonials, Contact
- **Functional Contact Form** — Sends emails via [Resend](https://resend.com) with toast notifications
- **Fully Responsive** — Optimised for desktop, tablet, and mobile viewports
- **Performance Optimised** — `next/image`, `next/font`, dynamic imports, and React Strict Mode

---

## 🛠 Tech Stack

| Category       | Technology                              |
|----------------|-----------------------------------------|
| Framework      | Next.js 16 (App Router)                 |
| Language       | TypeScript 5                            |
| Styling        | Tailwind CSS v4                         |
| Animations     | Framer Motion 12                        |
| Icons          | React Icons 5                           |
| Email          | Resend                                  |
| Utilities      | clsx, tailwind-merge                    |
| Linting        | ESLint 9 + eslint-config-next           |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page assembling all sections
│   ├── globals.css         # Global styles and CSS custom properties
│   └── api/
│       └── contact/        # API route for contact form (Resend)
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, About, Skills, …)
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                 # Reusable UI primitives
│       ├── GlassCard.tsx
│       ├── Button.tsx
│       ├── SectionContainer.tsx
│       ├── SectionHeader.tsx
│       ├── AnimatedBackground.tsx
│       ├── MouseSpotlight.tsx
│       └── Toast.tsx
├── constants/              # Shared data (projects, skills, experience, …)
└── lib/                    # Utility helpers
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Installation

```bash
git clone https://github.com/sinanpmk/portolio.git
cd portolio
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
```

> Sign up at [resend.com](https://resend.com) to get a free API key for the contact form.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📜 Scripts

| Script        | Description                      |
|---------------|----------------------------------|
| `npm run dev` | Start the development server     |
| `npm run build` | Build the production bundle    |
| `npm run start` | Start the production server    |
| `npm run lint` | Run ESLint                      |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
