# React TanStack Pack

A modern, fully-featured React application built with the TanStack ecosystem, TypeScript, and Material-UI. This project provides a robust foundation for building scalable web applications with state management, routing, data fetching, and internationalization.

## 🚀 Features

- **React 19** - Latest React with modern features
- **TypeScript** - Full type safety and developer experience
- **TanStack Router** - Type-safe routing with automatic code splitting
- **TanStack Query** - Powerful data fetching and caching
- **Material-UI (MUI)** - Complete component library and design system
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
├── api/             # API services and configurations
├── assets/          # Static assets (CSS, images)
├── components/      # Reusable UI components
├── constants/       # Application constants
├── forms/           # Form-related utilities
├── hooks/           # Custom React hooks
├── layouts/         # Layout components
├── mutations/       # TanStack Query mutations
├── providers/       # Context providers
├── queries/         # TanStack Query queries
├── routes/          # Route components
├── stores/          # Jotai atoms and stores
└── utils/           # Utility functions
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-tanstack-pack
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
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

### Development

- `npm run dev` - Start development server with hot reload
- `npm run preview` - Preview production build locally

### Building

- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier

### Testing

- `npm test` - Run unit tests with Vitest
- `npm run test:coverage` - Run tests with coverage report

### Storybook

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## 🎨 Component Development

This project uses Storybook for component development and documentation. You can:

1. Start Storybook: `npm run storybook`
2. Create stories for your components in `.stories.tsx` files
3. View and test components in isolation
4. Generate documentation automatically

## 🌍 Internationalization

The app supports multiple languages using i18next:

- **English** (`en.json`)
- **Vietnamese** (`vi.json`)

Translation files are located in `src/providers/AppLocalizationProvider/lang/`. To add new translations:

1. Add keys to both language files
2. Use the `useTranslation` hook in components
3. Access translations with `t('key')`

## 🗃️ State Management

### Global State (Jotai)

- Atomic state management with Jotai
- Store definitions in `src/stores/`
- Provider setup in `src/providers/AppStoreProvider/`

### Server State (TanStack Query)

- Data fetching and caching with TanStack Query
- Query definitions in `src/queries/`
- Mutation definitions in `src/mutations/`
- Configuration in `src/providers/AppQueryProvider/`

## 🛣️ Routing

Built with TanStack Router for type-safe routing:

- Route definitions in `src/routes/`
- Automatic code splitting enabled
- Type-safe navigation and params
- Generated route tree in `routeTree.gen.ts`

## 🎯 API Integration

### Configuration

- API endpoints in `src/constants/apiEndpoints.ts`
- Query keys in `src/queries/` (defined within query files)
- Mutation keys in `src/mutations/` (defined within mutation files)
- API setup in `src/api/api.ts`

### Usage

```typescript
// Query example
const { data, isLoading } = useQuery({
  queryKey: queryKeys.users.list(),
  queryFn: fetchUsers,
});

// Mutation example
const mutation = useMutation({
  mutationKey: mutationKeys.users.create(),
  mutationFn: createUser,
});
```

## 🎨 Theming & Styling

### Material-UI Theme

- Custom theme configuration in `src/providers/AppThemeProvider/`
- Supports light/dark mode switching
- Consistent design system across the app

### Styling Approaches

- **MUI Components** - Primary component library
- **Emotion** - CSS-in-JS for custom styling
- **Styled Components** - Additional styling utilities

## 🧪 Testing

### Unit Testing

- **Vitest** for fast unit testing
- **@vitest/browser** for browser-based testing
- **@vitest/coverage-v8** for coverage reports

### E2E Testing

- **Playwright** for end-to-end testing
- Browser automation and testing

### Storybook Testing

- **@storybook/addon-vitest** for component testing in Storybook
- Visual regression testing capabilities

## 📊 Data Visualization

Built-in support for data visualization with MUI X:

- **@mui/x-charts** - Charts and graphs
- **@mui/x-data-grid** - Advanced data tables
- **@mui/x-date-pickers** - Date/time input components
- **@mui/x-tree-view** - Hierarchical data display

## 🔧 Development Tools

### Code Quality

- **ESLint** with TypeScript support
- **Prettier** for code formatting
- **Husky** for Git hooks
- **lint-staged** for pre-commit checks

### Developer Experience

- **TanStack Router DevTools** - Route debugging
- **TanStack Query DevTools** - Query debugging
- **Jotai DevTools** - State debugging
- Hot module replacement (HMR)
- TypeScript strict mode

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Run tests: `npm test`
5. Run linting: `npm run lint`
6. Commit changes: `git commit -m 'Add new feature'`
7. Push to branch: `git push origin feature/new-feature`
8. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you have any questions or need help, please:

1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information
4. Join our community discussions

---
