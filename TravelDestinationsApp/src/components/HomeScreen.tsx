import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {commonStyles} from '../styles/common';
import {useLanguage, Language} from '../context/LanguageContext';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {language} = useLanguage();

  const goToDetails = () => {
    navigation.navigate('Details', {itemId: 123});
  };

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>
        {language === Language.English
          ? 'Choose a Destination'
          : language === Language.Spanish
          ? 'Elija un Destino'
          : 'Choisissez une Destination'}
      </Text>
      <Button
        title={
          language === Language.English
            ? 'Go to Details'
            : language === Language.Spanish
            ? 'Ir a Detalles'
            : 'Aller aux Détails'
        }
        onPress={goToDetails}
      />
      <TouchableOpacity
        style={commonStyles.settingsButton}
        onPress={goToSettings}>
        <Text style={commonStyles.settingsButtonText}>
          {language === Language.English
            ? 'Settings'
            : language === Language.Spanish
            ? 'Ajustes'
            : 'Paramètres'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
