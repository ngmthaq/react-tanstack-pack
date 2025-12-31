import { useTheme } from "@mui/material";
import {
  AllCommunityModule,
  ModuleRegistry,
  provideGlobalGridOptions,
  themeMaterial,
} from "ag-grid-community";
import { useEffect, type FC, type PropsWithChildren } from "react";
import { logDebugInfo } from "@/utils";

export const AppAgGridProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  useEffect(() => {
    ModuleRegistry.registerModules([AllCommunityModule]);
    document.body.dataset.agThemeMode = theme.palette.mode;
    provideGlobalGridOptions({
      theme: themeMaterial.withParams({
        fontFamily: theme.typography.fontFamily,
      }),
    });
    logDebugInfo("Ag-Grid global options provided", {
      mode: theme.palette.mode,
    });
  }, [theme]);

  return children;
};
