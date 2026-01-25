# React TanStack Pack

A modern, fully-featured React application built with the TanStack ecosystem, TypeScript, and Material-UI. This project provides a robust foundation for building scalable web applications with state management, routing, data fetching, and internationalization.

## 🚀 Features

- **React 19** - Latest React with modern features
- **TypeScript** - Full type safety and developer experience
- **TanStack Router** - Type-safe routing with automatic code splitting
- **TanStack Query** - Powerful data fetching and caching
- **Material-UI (MUI)** - Complete component library and design system
- **AG Grid** - High-performance data grid for large datasets
- **Jotai** - Atomic state management
- **i18next** - Internationalization support (English & Vietnamese)
- **Day.js** - Modern date manipulation
- **Vite** - Fast build tool and development server
- **Vitest** - Fast unit testing framework
- **Storybook** - Component development and documentation
- **ESLint + Prettier** - Code quality and formatting
- **Husky + lint-staged** - Git hooks for code quality

## 📦 Tech Stack

### Core

- **React 19** with TypeScript
- **Vite** for build tooling
- **TanStack Router** for routing
- **TanStack Query** for data fetching

### UI & Styling

- **Material-UI (MUI)** - Complete component library
- **Emotion** - CSS-in-JS styling
- **Styled Components** - Additional styling utilities
- **MUI X** - Advanced components (DataGrid, Charts, DatePickers, TreeView)
- **AG Grid** - Advanced data grid component

### State Management

- **Jotai** - Atomic state management
- **TanStack Query** - Server state management

### Internationalization

- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next

### Development Tools

- **Vitest** - Unit testing
- **Storybook** - Component development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks

## 🏗️ Project Structure

```
src/
├── assets/          # Static assets (CSS, images)
├── components/      # Reusable UI components
├── constants/       # Application constants
├── forms/           # Formik and Yup schema for validation
├── hooks/           # Custom React hooks
├── layouts/         # Layout components
├── mutations/       # TanStack Query mutations
├── providers/       # Context providers
├── queries/         # TanStack Query queries
├── routes/          # Route components
├── stores/          # Jotai atoms and stores
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ngmthaq/react-tanstack-pack.git
cd react-tanstack-pack
code .
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

### Development

- `yarn dev` - Start development server with hot reload
- `yarn preview` - Preview production build locally

### Building

- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Run ESLint with auto-fix
- `yarn format` - Format code with Prettier

### Testing

- `yarn test` - Run unit tests with Vitest
- `yarn test:coverage` - Run tests with coverage report

### Storybook

- `yarn storybook` - Start Storybook development server
- `yarn build-storybook` - Build Storybook for production
