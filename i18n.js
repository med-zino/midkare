import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
// Import translations directly
import enCommon from './public/locales/en/common.json';
import frCommon from './public/locales/fr/common.json';
import arCommon from './public/locales/ar/common.json';
import ruCommon from './public/locales/ru/common.json';
import trCommon from './public/locales/tr/common.json';




i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en', 
    ns: ['common'], 
    defaultNS: 'common', 
    resources: {
      en: {
        common: enCommon,
      },
      fr: {
        common: frCommon,
      },
      ar: {
        common: arCommon,
      },
      ru: {
        common: ruCommon,
      },
      tr: {
        common: trCommon,
      },
    },
    backend: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json', 
      queryStringParams: { v: '1.0.0' }, 
    },
  });

export default i18n;
