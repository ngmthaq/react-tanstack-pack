import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  AppAgGridProvider,
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
        <AppQueryProvider>
          <AppThemeProvider>
            <AppAgGridProvider>
              <Outlet />
              <TanStackRouterDevtools position="bottom-right" />
            </AppAgGridProvider>
          </AppThemeProvider>
        </AppQueryProvider>
      </AppLocalizationProvider>
    </AppStoreProvider>
  );
}
