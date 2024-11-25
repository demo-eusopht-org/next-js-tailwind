<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). -->

## Tech Plus

Tech Plus is a Next.js project bootstrapped with create-next-app. It utilizes modern web development tools, including TailwindCSS and PostCSS and react-icons, to deliver a responsive and dynamic user experience.

## Getting Started

Follow these steps to get started with the project locally:

# Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later recommended)
- npm or yarn for package management

# Installation

1. Clone the repository:

```bash
git clone <repository-url>

cd tech-plus-tailwind

```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

# Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize.


## Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

To serve the production build locally:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```


## 🛠 Features

- Modern Framework: Built with Next.js for server-side rendering and static site generation.
- Styling: Integrated with TailwindCSS via PostCSS for rapid UI development.
- Linting: Configured with ESLint for consistent and clean code.
- Dynamic Icons: Uses react-icons for scalable vector icons.

## 📂 Project Structure

```bash
/app              # Main application logic and pages
/public           # Static assets like images and fonts
/styles           # Global CSS and Tailwind configurations
/postcss.config.mjs # PostCSS setup
.eslintrc.json    # ESLint configuration
```

## ✨ Configuration

# ESLint

The project follows the Next.js core web vitals linting rules:

```bash
{
  "extends": "next/core-web-vitals"
}
```

# PostCSS

PostCSS is configured to use TailwindCSS:

```bash
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};
export default config;
```

## 🧰 Dependencies

- Next.js: v15.0.3
- React: v19.0.0 (RC)
- React-DOM: v19.0.0 (RC)
- React-Icons: v5.3.0

## Dev Dependencies

- ESLint: v8.x
- TailwindCSS: v3.4.1
- PostCSS: v8.x

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [TailwindCSS Documentation](https://tailwindcss.com/docs/installation)  - Understand the utility-first CSS framework.
- [React Documentation](https://react.dev)  - Explore React features and concepts.

## 🚢 Deployment

The project can be deployed seamlessly using platforms like Vercel or Netlify.

To deploy:

1. Connect your Git repository to the deployment platform.
2. Configure build settings:
- Build Command: npm run build
- Output Directory: .next
3. Deploy!


You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
