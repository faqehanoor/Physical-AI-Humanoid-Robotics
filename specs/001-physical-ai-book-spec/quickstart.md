# Quickstart: Physical AI Book Development

## Prerequisites
- Node.js v18+ installed
- npm or yarn package manager
- Git for version control

## Setup Instructions

1. **Install Docusaurus**:
   ```bash
   npx create-docusaurus@latest docs classic
   ```

2. **Navigate to project directory**:
   ```bash
   cd docs
   ```

3. **Install additional dependencies for interactive components**:
   ```bash
   npm install @docusaurus/module-type-aliases @docusaurus/types
   ```

4. **Start development server**:
   ```bash
   npm run start
   ```

## Project Structure
```
docs/
├── blog/                 # Blog posts (optional)
├── docs/                 # Documentation files
│   ├── chapter-1/        # Chapter content
│   │   ├── lesson-1.md   # Individual lessons
│   │   ├── lesson-2.md
│   │   └── lesson-3.md
│   └── intro.md          # Introduction page
├── src/
│   ├── components/       # Custom React components
│   │   └── InteractiveCodeBlock.js
│   ├── css/              # Custom styles
│   │   └── custom.css
│   └── pages/            # Additional pages
├── static/               # Static assets (images, etc.)
├── docusaurus.config.js  # Main configuration
├── package.json          # Dependencies and scripts
└── sidebars.js           # Navigation structure
```

## Creating Content
1. Add new markdown files to the `docs/` directory
2. Update `sidebars.js` to include new pages in navigation
3. Use MDX for interactive components
4. Test interactive examples before committing

## Running the Site
- `npm run start` - Start development server with hot reloading
- `npm run build` - Build static version for production
- `npm run serve` - Serve built site locally for testing