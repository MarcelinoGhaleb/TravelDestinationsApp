import React, { createContext, useState, useContext } from 'react';
export enum Language {
  English = 'English',
  Spanish = 'Spanish',
  French = 'French',
}

interface LanguageContextValue {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(Language.English);

  const value: LanguageContextValue = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
