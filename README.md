# Cybersecurity Blog

A modern blog focused on network security, FortiGate implementations, and cloud infrastructure. Built with Next.js and MDX for a seamless writing and reading experience.

## Features

- Modern, responsive design
- MDX support for rich content
- Dark mode optimized
- Tag-based categorization
- Admin-only content management

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- MDX
- Date-fns

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
├── content/
│   └── posts/          # MDX blog posts
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable React components
│   ├── lib/           # Utility functions
│   ├── pages/         # Next.js pages
│   └── styles/        # Global styles
└── types/             # TypeScript type definitions
```

## Content Management

Blog posts are stored as MDX files in the `content/posts` directory. Only administrators can push new content through the configured deployment process.