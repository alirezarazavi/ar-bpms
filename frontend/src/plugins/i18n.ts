import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import fa from "../locales/fa.json";

const resources = {
    en, fa
}

export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next)
    .init({
        resources,
        defaultNS: "common",
        fallbackLng: "en",
        lng: "fa"
    });