import React from 'react';
import {View, Text, Switch} from 'react-native';
import {commonStyles} from '../styles/common';
import {
  useLanguage,
  Language,
  LanguageProvider,
} from '../context/LanguageContext';

const SettingsScreen: React.FC = () => {
  const {language, setLanguage} = useLanguage();

  const changeLanguage = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>
        {language === Language.English
          ? 'Language'
          : language === Language.Spanish
          ? 'Idioma'
          : 'Langue'}
      </Text>
      <View style={commonStyles.settingsItem}>
        <Text style={commonStyles.text}>
          {language === Language.English
            ? 'Select Language'
            : language === Language.Spanish
            ? 'Seleccione Idioma'
            : 'Choisir la Langue'}
        </Text>
        <View style={commonStyles.languageOptions}>
          <Text
            onPress={() => changeLanguage(Language.English)}
            style={[
              language === Language.English
                ? commonStyles.selectedLanguage
                : commonStyles.languageOption,
            ]}>
            English
          </Text>
          <Text
            onPress={() => changeLanguage(Language.Spanish)}
            style={[
              language === Language.Spanish
                ? commonStyles.selectedLanguage
                : commonStyles.languageOption,
            ]}>
            Spanish
          </Text>
          <Text
            onPress={() => changeLanguage(Language.French)}
            style={[
              language === Language.French
                ? commonStyles.selectedLanguage
                : commonStyles.languageOption,
            ]}>
            French
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
