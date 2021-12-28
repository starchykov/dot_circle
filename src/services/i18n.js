import i18n from "i18next";
import {reactI18nextModule} from "react-i18next";
import detector from "i18next-browser-languagedetector";

// Import translations files from locales path
import translationEN from '../locales/en.json';
import translationRU from '../locales/ru.json';
import translationAZ from '../locales/az.json';

// Define translation languages
const resources = {
    en: {translation: translationEN},
    ru: {translation: translationRU},
    az: {translation: translationAZ}
};

// Use auto language detecting in cookie, localStorage, path, navigator etc.
i18n.use(detector);

// Passes i18n down to react-i18next
i18n.use(reactI18nextModule);

// Init i18n library with next params
i18n.init({
        resources,
        fallbackLng: "en", // use en if detected lng is not available
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {escapeValue: false} // react already safes from xss
    });

export default i18n;