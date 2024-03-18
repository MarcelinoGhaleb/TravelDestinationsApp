import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';
import SettingsScreen from '../components/SettingsScreen';
import DescriptionScreen from '../components/DescriptionScreen';
import {commonStyles} from '../styles/styles';
import {useLanguage} from '../context/LanguageContext';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const {language} = useLanguage();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Description"
          component={DescriptionScreen}
          options={{
            headerStyle: commonStyles.header,
            headerTintColor: commonStyles.headerText.color,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
