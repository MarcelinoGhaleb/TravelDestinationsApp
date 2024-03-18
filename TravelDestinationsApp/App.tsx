import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {LanguageProvider} from './src/context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppNavigator />
    </LanguageProvider>
  );
};

export default App;
