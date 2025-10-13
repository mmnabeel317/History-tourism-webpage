# Historical Tourism Website

A modern, interactive web application showcasing historical landmarks, fortresses, and cultural heritage sites. Built with cutting-edge frontend technologies to provide an engaging user experience for history enthusiasts and travelers.

## 🏛️ About

This project is a historical tourism platform that brings ancient fortresses, legends, and historical mysteries to life through an intuitive and visually appealing interface. Explore rich historical content, discover fascinating locations, and plan your next heritage adventure.

## 🚀 Tech Stack

- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool for lightning-fast development
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for robust code
- **[React](https://react.dev/)** - Powerful UI library for building interactive components
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid styling

## ✨ Features

- 🏰 Interactive historical site showcases
- 📱 Fully responsive design for all devices
- ⚡ Lightning-fast performance with Vite
- 🎨 Modern UI with shadcn/ui components
- 🔍 Type-safe development with TypeScript
- ♿ Accessible and user-friendly interface

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd historical-tourism-webpage
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build output will be in the `dist` directory.

## 🧪 Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 📁 Project Structure

```
historical-tourism-webpage/
├── src/
│ ├── components/ # React components
│ │ ├── BlogSection.tsx
│ │ ├── Footer.tsx
│ │ ├── GallerySection.tsx
│ │ ├── Header.tsx
│ │ ├── HeroSection.tsx
│ │ ├── HistorySection.tsx
│ │ ├── LocationSection.tsx
│ │ ├── PricingSection.tsx
│ │ ├── ScrollSection.tsx
│ │ ├── TestimonialSection.tsx
│ │ ├── VideoTextSection.tsx
│ │ └── VisitSection.tsx
│ │
│ │ └── ui/ # Small UI primitives and shared components
│ │ ├── accordion.tsx
│ │ ├── alert-dialog.tsx
│ │ ├── alert.tsx
│ │ ├── aspect-ratio.tsx
│ │ ├── avatar.tsx
│ │ ├── badge.tsx
│ │ ├── breadcrumb.tsx
│ │ ├── button.tsx
│ │ ├── calendar.tsx
│ │ ├── card.tsx
│ │ ├── carousel.tsx
│ │ ├── chart.tsx
│ │ ├── checkbox.tsx
│ │ ├── collapsible.tsx
│ │ ├── command.tsx
│ │ ├── context-menu.tsx
│ │ ├── dialog.tsx
│ │ ├── drawer.tsx
│ │ ├── dropdown-menu.tsx
│ │ ├── form.tsx
│ │ ├── hover-card.tsx
│ │ ├── input-otp.tsx
│ │ ├── input.tsx
│ │ ├── label.tsx
│ │ ├── menubar.tsx
│ │ ├── navigation-menu.tsx
│ │ ├── pagination.tsx
│ │ ├── popover.tsx
│ │ ├── progress.tsx
│ │ ├── radio-group.tsx
│ │ ├── resizable.tsx
│ │ ├── scroll-area.tsx
│ │ ├── select.tsx
│ │ ├── separator.tsx
│ │ ├── sheet.tsx
│ │ ├── sidebar.tsx
│ │ ├── skeleton.tsx
│ │ ├── slider.tsx
│ │ ├── sonner.tsx
│ │ ├── switch.tsx
│ │ ├── table.tsx
│ │ ├── tabs.tsx
│ │ ├── textarea.tsx
│ │ ├── toast.tsx
│ │ ├── toaster.tsx
│ │ ├── toggle-group.tsx
│ │ ├── toggle.tsx
│ │ ├── tooltip.tsx
│ │ └── use-toast.ts
│ │
│ ├── lib/ # Utility functions and helpers
│ │ └── utils.ts
│ │
│ ├── hooks/ # Custom React hooks
│ │ ├── use-mobile.tsx
│ │ └── use-toast.ts
│ │
│ ├── pages/ # Page components
│ │ ├── Index.tsx
│ │ └── NotFound.tsx
│ │
│ ├── assets/ # Static assets (images, fonts, etc.)
│ │ ├── castle-archway.jpg
│ │ ├── castle-aerial.jpg
│ │ ├── castle-bridge.jpg
│ │ ├── castle-courtyard.jpg
│ │ ├── castle-hallway.jpg
│ │ ├── castle-library.jpg
│ │ ├── castle-painting.jpg
│ │ ├── castle-pathway.jpg
│ │ ├── crown.jpg
│ │ ├── guard.jpg
│ │ ├── hero-castle.jpg
│ │ ├── neuschwanstein.jpg
│ │ ├── reference-scroll3.png
│ │ ├── side_flower_artifact.svg
│ │ ├── stained-glass.jpg
│ │ └── tree-pathway.jpg
│ │
│ ├── App.tsx # Main App component
│ ├── App.css
│ ├── index.css
│ ├── main.tsx # Application entry point
│ └── vite-env.d.ts
│
├── public/ # Public static files
│ ├── favicon.ico
│ ├── placeholder.svg
│ └── robots.txt
│
├── index.html # HTML template
├── package.json # Project dependencies
├── package-lock.json # Lockfile
├── bun.lockb # Bun lockfile (if using bun)
├── components.json # Component metadata
├── postcss.config.js
├── eslint.config.js
├── tsconfig.json # TypeScript configuration
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts # Vite configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── README.md # Project documentation
```

## 🎨 Styling

This project uses Tailwind CSS for styling with shadcn/ui components for pre-built, accessible UI elements. The design system ensures consistency across the application while maintaining flexibility for customization.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌐 Live Demo

Check out the live website: [Historical Tourism Website](https://historical-tourism-webpage.lovable.app/)

## 📧 Contact

For questions or feedback, please open an issue in the repository.

---

Built by Mohd Nabeel.
