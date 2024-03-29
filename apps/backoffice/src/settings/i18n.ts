import type { InitOptions } from "i18next";
import i18n from "i18next";
import * as ES from "locales/es";
import * as EN from "locales/en";

// the translations
const resources = {
  es: ES,
  en: EN,
};

let lng = localStorage.getItem("i18nextLng");
if (!lng) {
  lng = "es";
  localStorage.setItem("i18nextLng", lng);
}

const options: InitOptions = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  debug: process.env.NODE_ENV !== "production",
  lng,
  resources,

  fallbackLng: lng,

  ns: ["common"],

  defaultNS: "common",

  react: {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    useSuspense: true,
  },
};

// eslint-disable-next-line func-names, @typescript-eslint/no-shadow
i18n.on("languageChanged", function (lng) {
  localStorage.setItem("i18nextLng", lng);
});

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.init(options).then();

export default i18n;
