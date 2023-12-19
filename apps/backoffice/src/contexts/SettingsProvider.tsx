import type { ReactNode } from "react";
import { useCallback, useContext, useMemo } from "react";
import { initialSettings, SettingsContext } from "contexts/SettingsContext";
import { useLocalStorage } from "hook-utils";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { THEMES } from "mui-react-common";
import { THEME_SETTING } from "settings/theme";
import { esES, enUS } from "@mui/material/locale";
import { useTranslation } from "react-i18next";

interface SettingsProviderProps {
  children: ReactNode;
}

function SettingsProvider({ children }: SettingsProviderProps) {
  const { data: settings, storeData: saveSettings } = useLocalStorage(
    "settings",
    initialSettings
  );

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

const localesMap: Record<string, any> = {
  es: esES,
  en: enUS,
};

export const useSettings = () => {
  const { settings, saveSettings } = useContext(SettingsContext);
  const { i18n } = useTranslation("locales");
  const locale = i18n.language;

  const toggleTheme = useCallback(() => {
    settings.theme =
      settings.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    saveSettings({ ...settings });
  }, [settings, saveSettings]);

  const theme = useMemo(() => {
    // @ts-ignore

    const currentTheme: Theme = THEME_SETTING[settings.theme];

    //locale
    const currentLocale = localesMap[locale] || esES;

    let themeCreated = createTheme(currentTheme, currentLocale);

    themeCreated = responsiveFontSizes(themeCreated);

    // theme shadows
    themeCreated.shadows[1] = "0px 4px 23px rgba(0, 0, 0, 0.12)";
    themeCreated.shadows[2] = "0px 0px 21px 1px rgba(0, 0, 0, 0.07)";
    themeCreated.shadows[3] = "0px 10px 30px rgba(0, 0, 0, 0.1)";
    themeCreated.shadows[4] = "0px 7px 30px 3px rgba(0, 0, 0, 0.05)";

    return themeCreated;
  }, [settings, locale]);

  return {
    settings,
    theme,
    saveSettings,
    toggleTheme,
  };
};

export default SettingsProvider;
