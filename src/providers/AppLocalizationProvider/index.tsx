import * as i18next from "i18next";
import { useEffect, type FC, type PropsWithChildren } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import { StorageKeys } from "@/configs";
import { i18nConfig } from "./configs";

i18next.use(initReactI18next).init(i18nConfig);

const i18nBroadcastChannelName = "AppLocalizationProviderI18nBroadcastChannel";
const i18nBroadcastChannel = new BroadcastChannel(i18nBroadcastChannelName);

export const AppLocalizationProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage =
      localStorage.getItem(StorageKeys.LANGUAGE) || i18nConfig.fallbackLng;

    if (storedLanguage !== i18n.language) {
      i18n.changeLanguage(String(storedLanguage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      localStorage.setItem(StorageKeys.LANGUAGE, lng);
      i18nBroadcastChannel.postMessage({ language: lng });
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    const handleLanguageChange = (event: MessageEvent) => {
      const newLanguage = event.data?.language || i18nConfig.fallbackLng;
      if (newLanguage && newLanguage !== i18n.language) {
        i18n.changeLanguage(event.data.language);
      }
    };

    i18nBroadcastChannel.addEventListener("message", handleLanguageChange);

    return () => {
      i18nBroadcastChannel.removeEventListener("message", handleLanguageChange);
    };
  });

  return children;
};
