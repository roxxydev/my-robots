import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import Store from './store/store';
import AppNavigator from './components/navigation/AppNavigator';

const App = (): JSX.Element => {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
