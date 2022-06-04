import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import { style } from '../styles/style';

const Counter = (props: any) => {
  const [counter, setCounter] = useState(props.number);

  function handleDecreaseButton() {
    setCounter(counter - 1);
  }

  function handleIncreaseButton() {
    setCounter(counter + 1);
  }

  return (
    <>
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
    </>
  );
};

export default Counter;
