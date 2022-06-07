import React, {useContext, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {style} from '../styles/style';

import { EnterNumberContext } from '../contexts/enterNumber';

const Counter = () => {
  const initialNumberContext = useContext(EnterNumberContext)

  const [counter, setCounter] = useState(initialNumberContext.number);

  function handleDecreaseButton() {
    setCounter(counter - 1);
  }

  function handleIncreaseButton() {
    setCounter(counter + 1);
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Contador</Text>
      <View>
        <Text style={style.counter}>{counter}</Text>
      </View>
      <View style={style.button}>
        <Button
          title="Minus one"
          color="#473248"
          onPress={() => handleDecreaseButton()}
        />
        <Button
          title="Plus one"
          color="#473248"
          onPress={() => handleIncreaseButton()}
        />
      </View>
    </ View>
  );
};

export default Counter;
