import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enProfile from './locale/en/Profile.json';
import koProfile from './locale/ko/Profile.json';
import enCareer from './locale/en/Career.json';
import koCareer from './locale/ko/Career.json';
import enProject from './locale/en/Project.json';
import koProject from './locale/ko/Project.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { profile: enProfile, career: enCareer, project: enProject },
            ko: { profile: koProfile, career: koCareer, project: koProject }
        },
        ns: ['profile', 'career', 'project', 'pokedex', 'portfolio', 'nicknameMaker'],
        defaultNs: 'profile',
        lng: 'en', // default
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;