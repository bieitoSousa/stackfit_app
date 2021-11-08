import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'moment/min/locales';
import moment from 'moment';
import en from './en';
import es from './es';
import 'intl-pluralrules';

const resources = {
    en: en,
    es: es,
};
const langTypes = Object.keys(resources);

i18n
    .use(initReactI18next)
    .init({
        resources, //envio los idiomas
        lng: 'en',
        fallbackLng: "en",
        keySeparator: false,
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        }
    });
i18n.on('languageChanged', (lng) => moment.locale(lng));

export default i18n;
