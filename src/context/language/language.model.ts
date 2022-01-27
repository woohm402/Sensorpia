export interface Language {
  language: 'en' | 'kor'
  setLanguage: (lng: Language['language']) => void
  languageData: any
  fetchLanguage: () => Promise<void>
}
