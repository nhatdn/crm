import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'

import frLocale from '@/i18n/locales/fr.json'
import viLocale from '@/i18n/locales/vi.json'

const resources = {
  fr: {
    translation: frLocale
  },
  vi: {
    translation: viLocale
  }
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
