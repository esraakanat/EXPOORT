import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import translationEn from './len/en.json';
import translationnAr from './len/ar.json';
import translationnNl from './len/nl.json';
import HttpApi from 'i18next-http-backend'


// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

const resources = {

  en: {

    translation: translationEn,
    

  },

  ar: {

    translation: translationnAr,
    dir: 'rtl',



  },
  nl:{
    translation:translationnNl
  }

};

i18n

  .use(initReactI18next).use(LanguageDetector).use(HttpApi)

  .init({

    resources,

    fallbackLng: 'nl',
    
    debug: true,
    supportedLngs: ['en', 'ar', 'nl'],

    interpolation: {

      escapeValue: false,

    },
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },

  });

