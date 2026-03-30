import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enHome from './locale/en/home.json';
import koHome from './locale/ko/home.json';
import enProfile from './locale/en/Profile.json';
import koProfile from './locale/ko/Profile.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { home: enHome, profile: enProfile },
            ko: { home: koHome, profile: koProfile }
        },
        ns: ['home', 'profile'],
        defaultNs: 'home',
        lng: 'en', // default
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;