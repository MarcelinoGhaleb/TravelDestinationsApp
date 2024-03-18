import React from 'react';
import {View, Text, Button} from 'react-native';
import {commonStyles} from '../styles/common';
import {useLanguage, Language} from '../context/LanguageContext';
interface DescriptionScreenProps {
  route: any;
  navigation: any;
}

const DescriptionScreen: React.FC<DescriptionScreenProps> = ({
  route,
  navigation,
}) => {
  const {description} = route.params;
  const {language} = useLanguage();

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>
        {language === Language.English
          ? 'Description'
          : language === Language.Spanish
          ? 'Descripción'
          : 'Description'}
      </Text>
      <Text style={commonStyles.descriptionText}>{description}</Text>
      <Button
        title={
          language === Language.English
            ? 'Go to Home'
            : language === Language.Spanish
            ? 'Ir a Inicio'
            : 'Aller à la Maison'
        }
        onPress={goToHome}
      />
    </View>
  );
};

export default DescriptionScreen;
