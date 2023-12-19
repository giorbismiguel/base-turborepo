import { createContext } from "react";
import type { ThemeSettingType } from "mui-react-common";
import { THEMES } from "mui-react-common";

//Valores que expondrá el contexto
interface SettingsContextProps {
  settings: ThemeSettingType;
  saveSettings: (settings: ThemeSettingType) => void;
}

//valores iniciales del Setting
export const initialSettings: ThemeSettingType = {
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
};

export const SettingsContext = createContext<SettingsContextProps>({
  settings: initialSettings,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  saveSettings: (settings: ThemeSettingType) => {},
}); // component props type
