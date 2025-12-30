import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  AppLocalizationProvider,
  AppQueryProvider,
  AppStoreProvider,
  AppThemeProvider,
} from "../providers";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <AppStoreProvider>
      <AppLocalizationProvider>
        <AppThemeProvider>
          <AppQueryProvider>
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" />
          </AppQueryProvider>
        </AppThemeProvider>
      </AppLocalizationProvider>
    </AppStoreProvider>
  );
}
