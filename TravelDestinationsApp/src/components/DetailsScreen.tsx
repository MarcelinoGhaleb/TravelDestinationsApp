import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {commonStyles} from '../styles/common';
import {useNavigation} from '@react-navigation/native'; 
import {useLanguage, Language} from '../context/LanguageContext';

interface DetailsScreenProps {
  navigation: any;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({navigation}) => {
  const {language} = useLanguage();

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const destinations = [
    {
      name:
        language === Language.English
          ? 'Beach Destinations'
          : language === Language.Spanish
          ? 'Destinos de Playa'
          : 'Destinations de Plage',
      description:
        language === Language.English
          ? 'Explore beautiful beach destinations around the world.'
          : language === Language.Spanish
          ? 'Explora hermosos destinos de playa en todo el mundo.'
          : 'Découvrez de magnifiques destinations de plage à travers le monde.',
    },
    {
      name:
        language === Language.English
          ? 'Mountain Getaways'
          : language === Language.Spanish
          ? 'Escapadas a la Montaña'
          : 'Escapades en Montagne',
      description:
        language === Language.English
          ? 'Discover tranquil mountain getaways with breathtaking views.'
          : language === Language.Spanish
          ? 'Descubre tranquilas escapadas a la montaña con vistas impresionantes.'
          : 'Découvrez des escapades tranquilles en montagne avec des vues à couper le souffle.',
    },
    {
      name:
        language === Language.English
          ? 'City Escapes'
          : language === Language.Spanish
          ? 'Escapadas Urbanas'
          : 'Évasions Citadines',
      description:
        language === Language.English
          ? 'Experience vibrant city escapes filled with culture and excitement.'
          : language === Language.Spanish
          ? 'Experimenta vibrantes escapadas urbanas llenas de cultura y emoción.'
          : "Découvrez des escapades urbaines vibrantes remplies de culture et d'excitation.",
    },
  ];

  const goToDescription = (description: string) => {
    navigation.navigate('Description', {description});
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>
        {language === Language.English
          ? 'Places to Travel'
          : language === Language.Spanish
          ? 'Lugares para Viajar'
          : 'Lieux à Visiter'}
      </Text>
      {destinations.map((destination, index) => (
        <TouchableOpacity
          key={index}
          style={commonStyles.placeButton}
          onPress={() => goToDescription(destination.description)}>
          <Text style={commonStyles.placeButtonText}>{destination.name}</Text>
        </TouchableOpacity>
      ))}
      <Button
        title={
          language === Language.English
            ? 'Return to Home'
            : language === Language.Spanish
            ? 'Volver a Inicio'
            : 'Retourner à la Maison'
        }
        onPress={goToHome}
      />
    </View>
  );
};

export default DetailsScreen;
