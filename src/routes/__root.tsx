import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  AppDatetimeProvider,
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
      <AppDatetimeProvider>
        <AppLocalizationProvider>
          <AppThemeProvider>
            <AppQueryProvider>
              <Outlet />
              <TanStackRouterDevtools position="bottom-right" />
            </AppQueryProvider>
          </AppThemeProvider>
        </AppLocalizationProvider>
      </AppDatetimeProvider>
    </AppStoreProvider>
  );
}
