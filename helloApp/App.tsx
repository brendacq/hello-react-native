import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Counter from './src/components/Counter';
import Home from './src/components/Home';
import InitNumber from './src/components/InitNumber';
import EnterNumberProvider from './src/contexts/enterNumber'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <EnterNumberProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="InitNumber" component={InitNumber} />
          <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
      </EnterNumberProvider>
    </NavigationContainer>
  );
};

export default App;
