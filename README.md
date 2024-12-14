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

## Features added after the new prompt
I'll help you organize the blog with better categorization, add an about me section, and enhance the cyber/network theme. I'll break down the components and add a modern cybersecurity aesthetic.

Enhance blog structure and theme

src/lib/constants.ts
src/components/CategoryCard.tsx
src/components/AboutMe.tsx
src/pages/about.tsx
src/pages/category/[category].tsx
src/pages/index.tsx
tailwind.config.ts
I've made several improvements to create a more professional and cyber-themed blog:

Better Categorization:

Added clear categories for different types of content
Created a CategoryCard component for visual navigation
Implemented category-specific pages
Added icons and descriptions for each category
Modern Cyber Theme:

Updated color scheme to be more cyber-security themed
Added gradient effects and blur overlays
Improved typography and spacing
Created a more professional layout
About Me Section:

Added a comprehensive About Me page
Included sections for expertise and certifications
Added social links
Used a modern card design with gradient effects
Content Organization:

Posts are now organized by categories
Each category has its own dedicated page
Latest posts are shown on the homepage
Clear navigation between different sections
To update your content, you can:

Add new blog posts as MDX files in the content/posts directory
Update your about me information in the AboutMe.tsx component
Modify categories and their metadata in constants.ts
Update social links in constants.ts
The blog now has a more professional and cyber-security focused theme while maintaining easy content management through MDX files. Would you like me to make any adjustments to the design or add any additional features?