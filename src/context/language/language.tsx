import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Language, LanguageData } from './language.model';
import axios from 'axios';

const initialLanguage: Language = {
  language: 'en',
  setLanguage: () => null,
  languageData: null,
  fetchLanguage: () => Promise.resolve(),
  korLanguage: null,
  enLanguage: null,
};

const LanguageContext = createContext<Language>(initialLanguage);

export const LanguageProvider = ({ children }: PropsWithChildren<{}>) => {
  const [language, setLanguage] = useState<Language['language']>(
    initialLanguage.language
  );
  const [languageData, setLanguageData] = useState<any>(null);
  const [enLanguage, setEnLanguage] = useState<any>(null);
  const [korLanguage, setKorLanguage] = useState<any>(null);

  console.log(enLanguage);

  const onChangeLanguage = useCallback(
    (lng: Language['language']) => {
      setLanguage(lng);
      setLanguageData({ en: enLanguage, kor: korLanguage }[lng]);
    },
    [enLanguage, korLanguage]
  );

  const fetchLanguage = useCallback(() => {
    return Promise.allSettled([
      axios.get(
        'https://sensorpia.s3.ap-northeast-2.amazonaws.com/language/en.json'
      ),
      axios.get(
        'https://sensorpia.s3.ap-northeast-2.amazonaws.com/language/kor.json'
      ),
    ]).then(([en, ko]) => {
      if ('value' in en && 'value' in ko) {
        setEnLanguage(en.value.data);
        setKorLanguage(ko.value.data);
        setLanguageData(language === 'en' ? en.value.data : ko.value.data);
      }
    });
  }, [language]);

  useEffect(() => {
    fetchLanguage();
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: onChangeLanguage,
        languageData,
        fetchLanguage,
        korLanguage,
        enLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

interface ExportLanguage extends Language {
  languageData: LanguageData;
}

export const useLanguageContext = () => useContext(LanguageContext) as ExportLanguage;
