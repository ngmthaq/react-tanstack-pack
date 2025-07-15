import { type InitOptions } from "i18next";
import en from "@/assets/lang/en.json";
import vi from "@/assets/lang/vi.json";

export type I18nOptions = Required<
  Pick<
    InitOptions,
    "fallbackLng" | "supportedLngs" | "interpolation" | "resources" | "debug"
  >
>;

export const i18nConfig: I18nOptions = {
  fallbackLng: "en",
  supportedLngs: ["en", "vi"],
  interpolation: { escapeValue: false },
  resources: { en, vi },
  debug: import.meta.env.DEV,
};
