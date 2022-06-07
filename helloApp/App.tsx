import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Counter from './src/components/Counter'
import Home from './src/components/Home';
import InitNumber from './src/components/InitNumber';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Counter" component={Counter}/>
        <Stack.Screen name="InitNumber" component={InitNumber}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
