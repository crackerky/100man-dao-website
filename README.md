# Million Member DAO Website

A cutting-edge, community-driven asset valorization platform website built with modern web technologies.

## 🌟 Features

- **Interactive Hero Section** with particle system and mouse-tracking effects
- **Animated Background** with noise gradients and texture overlays
- **4 Service Areas** with custom geometric icons and smooth animations
- **Responsive Design** optimized for all screen sizes
- **Custom Cursor** with smooth spring animations
- **Glassmorphism UI** with backdrop blur effects
- **Framer Motion Animations** for smooth page transitions
- **Performance Optimized** with reduced motion support

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI
- **[Lucide React](https://lucide.dev/)** - Beautiful hand-crafted SVG icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/crackerky/100man-dao-website.git
cd 100man-dao-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── molecules/           # Small reusable components
│   │   ├── CustomCursor.tsx
│   │   ├── NumberCounter.tsx
│   │   └── ServiceIcon.tsx
│   └── organisms/           # Large section components
│       ├── ApproachSection.tsx
│       ├── ContactSection.tsx
│       ├── FooterWorks.tsx
│       ├── HeroSection.tsx
│       ├── Navigation.tsx
│       ├── NoiseBackground.tsx
│       ├── ProfileSection.tsx
│       ├── VideoSection.tsx
│       └── WorksSection.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Key Sections

### Hero Section
- Interactive particle system
- Mouse-tracking background elements
- Responsive typography with hover effects
- Custom cursor integration

### Approach Section
- 4 animated service icons (Real Estate, Financial Assets, Digital Assets, Community Power)
- Geometric shapes with CSS transforms
- Hover interactions and parallax effects

### Works Section
- Grid layout for featured projects
- Gradient backgrounds
- Smooth hover animations

### Contact Section
- Call-to-action button
- Decorative animated elements

## 🎭 Animations

The website features several custom animations:

- **Noise Gradient Flow** - Continuous background movement
- **Particle System** - Floating particles in hero section
- **Breathing Effects** - Subtle scale animations on elements
- **Service Icons** - Geometric shapes with unique animations
- **Parallax Scrolling** - Mouse-responsive element movement

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (< 768px)
- Tablet (768px - 1024px) 
- Desktop (> 1024px)

Special considerations for mobile:
- Reduced animation complexity
- Touch-optimized interactions
- Performance-first approach

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion preferences respected

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/crackerky/100man-dao-website)

Alternatively, you can deploy to:
- [Netlify](https://netlify.com/)
- [Railway](https://railway.app/)
- [Digital Ocean](https://www.digitalocean.com/products/app-platform/)

## 🎨 Design Philosophy

The Million Member DAO website embodies:

- **Modern Minimalism** - Clean, focused design with purposeful elements
- **Interactive Storytelling** - Engaging animations that guide user attention
- **Community-Centric** - Design reflects collaborative and inclusive values
- **Technology Forward** - Cutting-edge web technologies for smooth experience
- **Performance First** - Optimized for speed and accessibility

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 About Million Member DAO

Million Member DAO is a community-driven asset valorization platform that focuses on:

- **Real Estate** - Idle property utilization and transformation
- **Financial Assets** - DeFi protocols and yield optimization  
- **Digital Assets** - NFT ecosystems and token economies
- **Community Power** - Collective intelligence and governance

---

Built with ❤️ for the future of decentralized communities.
