import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'

import { Language } from './language.model'

import korLanguage from '../../../pages/api/kor.json'
import enLanguage from '../../../pages/api/en.json'

const initialLanguage: Language = {
  language: 'en',
  setLanguage: () => null,
  languageData: enLanguage,
}

const LanguageContext = createContext<Language>(initialLanguage)

export const LanguageProvider = ({ children }: PropsWithChildren<{}>) => {
  const [language, setLanguage] = useState<Language['language']>(
    initialLanguage.language
  )
  const [languageData, setLanguageData] = useState<any>(enLanguage)

  const onChangeLanguage = (lng: Language['language']) => {
    setLanguage(lng)
    setLanguageData({ en: enLanguage, kor: korLanguage }[lng])
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: onChangeLanguage, languageData }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(LanguageContext) as Language
