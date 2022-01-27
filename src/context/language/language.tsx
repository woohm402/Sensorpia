import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { Language } from './language.model'
import axios from 'axios'

const initialLanguage: Language = {
  language: 'en',
  setLanguage: () => null,
  languageData: null,
  fetchLanguage: () => null,
}

const LanguageContext = createContext<Language>(initialLanguage)

export const LanguageProvider = ({ children }: PropsWithChildren<{}>) => {
  const [language, setLanguage] = useState<Language['language']>(
    initialLanguage.language
  )
  const [languageData, setLanguageData] = useState<any>(null)
  const [enLanguage, setEnLanguage] = useState<any>(null)
  const [korLanguage, setKorLanguage] = useState<any>(null)

  const onChangeLanguage = useCallback(
    (lng: Language['language']) => {
      setLanguage(lng)
      setLanguageData({ en: enLanguage, kor: korLanguage }[lng])
    },
    [enLanguage, korLanguage]
  )

  const fetchLanguage = useCallback(() => {
    return Promise.allSettled([
      axios.get(
        'https://sensorpia.s3.ap-northeast-2.amazonaws.com/language/en.json'
      ),
      axios.get(
        'https://sensorpia.s3.ap-northeast-2.amazonaws.com/language/kor.json'
      ),
    ]).then(([en, ko]) => {
      if ('value' in en) {
        setEnLanguage(en.value.data)
        setLanguageData(en.value.data)
      }

      if ('value' in ko) {
        setKorLanguage(ko.value.data)
      }
    })
  }, [])

  useEffect(() => {
    fetchLanguage()
  }, [])

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: onChangeLanguage, languageData, fetchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(LanguageContext) as Language
