import React from 'react';
import { View } from 'react-native';

import { style } from './src/styles/style';
import Counter from './src/components/Counter'

const App = () => {
  return (
    <View style={style.container}>
      <Counter number={30}></Counter>
    </View>
  );
};

export default App;
