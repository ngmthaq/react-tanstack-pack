import { useColorScheme } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { mode, setMode } = useColorScheme();
  const { t, i18n } = useTranslation();

  const handleToggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <p>Current mode: {mode}</p>
      <button type="button" onClick={handleToggleMode}>
        Toggle Mode
      </button>
      <p>Current language: {i18n.language}</p>
      <p>{t("helloWorld")}</p>
      <button type="button" onClick={() => handleChangeLanguage("en")}>
        English
      </button>
      <button type="button" onClick={() => handleChangeLanguage("vi")}>
        Tiếng Việt
      </button>
    </div>
  );
}
