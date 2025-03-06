# Precalculus Trigonometry Study Guide

## Commands
- Start dev server: `npm start`
- Build production: `npm run build`
- Run all tests: `npm test`
- Run single test file: `npm test -- src/components/common/TabNavigation.test.js`
- Run tests with pattern: `npm test -- -t "renders angle markers"`
- Deploy to GitHub Pages: `npm run deploy`

## Code Style Guidelines
- **Imports**: React first, then components, hooks, utils, data
- **Components**: Functional components with explicit arrow syntax (`const Component = () => {}`)
- **Comments**: JSDoc-style comments above components and major functions
- **File Structure**: Components in src/components/{common,specific}, pages in src/pages, hooks in src/hooks
- **Testing**: Components should have corresponding .test.js files with descriptive test names
- **Error Handling**: Use default cases in switch statements, null checking with early returns
- **Naming**: PascalCase for components, camelCase for variables/functions, kebab-case for CSS classes
- **Styling**: TailwindCSS inline classes

## Architecture
The app uses custom hooks for state management and follows a modular component structure.