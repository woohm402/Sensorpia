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
  isEdited: false,
  languageData: null,
  fetchLanguage: () => Promise.resolve(),
  handleSave: () => Promise.resolve(),
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
  const [isEdited, setIsEdited] = useState(false);

  const onChangeLanguage = (lng: Language['language']) => {
    setLanguage(lng);
  };

  const fetchLanguage = () => {
    return Promise.allSettled([
      axios.get('/api/content/en'),
      axios.get('/api/content/kor'),
    ]).then(([en, ko]) => {
      setIsEdited(false);
      if ('value' in en && 'value' in ko) {
        setEnLanguageData(en.value.data);
        setKorLanguageData(ko.value.data);
      }
    });
  };

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
        isEdited,
        languageData: { en: enLanguageData, kor: korLanguageData }[language],
        fetchLanguage,
        handleSave,
        setCurrentLanguageData: (e) => {
          setIsEdited(true);
          ({
            en: setEnLanguageData,
            kor: setKorLanguageData,
          }[language](e));
        },
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
