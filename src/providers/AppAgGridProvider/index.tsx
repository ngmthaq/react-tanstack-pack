import { useTheme } from "@mui/material";
import {
  AllCommunityModule,
  ModuleRegistry,
  provideGlobalGridOptions,
  themeMaterial,
} from "ag-grid-community";
import { useEffect, type PropsWithChildren } from "react";

export function AppAgGridProvider({ children }: PropsWithChildren) {
  const theme = useTheme();

  useEffect(() => {
    ModuleRegistry.registerModules([AllCommunityModule]);
  }, []);

  useEffect(() => {
    document.body.dataset.agThemeMode = theme.palette.mode;
    provideGlobalGridOptions({
      theme: themeMaterial.withParams({
        fontFamily: theme.typography.fontFamily,
      }),
    });
  }, [theme]);

  return children;
}
