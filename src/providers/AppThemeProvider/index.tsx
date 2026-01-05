import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useMemo, type FC, type PropsWithChildren } from "react";
import { useThemeStore } from "@/stores";
import { theme as defaultTheme } from "./theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme: currentTheme } = useThemeStore();
  const theme = useMemo(() => {
    return currentTheme || defaultTheme;
  }, [currentTheme]);

  return (
    <ThemeProvider theme={theme} noSsr disableTransitionOnChange>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
};
