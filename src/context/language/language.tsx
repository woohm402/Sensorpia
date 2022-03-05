import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Language, LanguageData } from './language.model';
import axios from 'axios';
import toast from 'react-hot-toast';

const initialLanguage: Language = {
  language: 'en',
  setLanguage: () => null,
  languageData: null,
  fetchLanguage: () => Promise.resolve(),
  handleSave: () => Promise.resolve(),
  korLanguageData: null,
  enLanguageData: null,
  setEnLanguageData: () => null,
  setKorLanguageData: () => null,
  setCurrentLanguageData: () => null,
};

const LanguageContext = createContext<Language>(initialLanguage);

export const LanguageProvider = ({ children }: PropsWithChildren<{}>) => {
  const [language, setLanguage] = useState<Language['language']>(
    initialLanguage.language
  );
  const [enLanguageData, setEnLanguageData] = useState<LanguageData | null>(
    null
  );
  const [korLanguageData, setKorLanguageData] = useState<LanguageData | null>(
    null
  );

  const onChangeLanguage = (lng: Language['language']) => {
    setLanguage(lng);
  };

  const fetchLanguage = () =>
    Promise.allSettled([
      axios.get(
        'https://sensorpia.s3.ap-northeast-2.amazonaws.com/language/en.json'
      ),
      axios.get(
        'https://sensorpia.s3.ap-northeast-2.amazonaws.com/language/kor.json'
      ),
    ]).then(([en, ko]) => {
      if ('value' in en && 'value' in ko) {
        setEnLanguageData(en.value.data);
        setKorLanguageData(ko.value.data);
      }
    });

  const handleSave = async () => {
    try {
      await Promise.allSettled([
        axios.put(`/api/admin/content/en`, {
          body: JSON.stringify(enLanguageData),
        }),
        axios.put(`/api/admin/content/kor`, {
          body: JSON.stringify(korLanguageData),
        }),
      ]);
      await fetchLanguage();
      toast.success('값이 변경되었습니다.');
    } catch (err) {
      toast.error('오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    fetchLanguage();
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: onChangeLanguage,
        languageData: { en: enLanguageData, kor: korLanguageData }[language],
        fetchLanguage,
        handleSave,
        korLanguageData,
        enLanguageData,
        setKorLanguageData,
        setEnLanguageData,
        setCurrentLanguageData:
          language === 'kor' ? setKorLanguageData : setEnLanguageData,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

interface ExportLanguage extends Language {
  languageData: LanguageData;
}

export const useLanguageContext = () =>
  useContext(LanguageContext) as ExportLanguage;
