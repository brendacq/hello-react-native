import React, {useContext, useState} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import { EnterNumberContext } from '../contexts/enterNumber';
import { style } from '../styles/style';

const InitNumber = ({navigation}: any) => {
  const [initialNumber, setInitialNumber] = useState(0);

  const numberContext = useContext(EnterNumberContext);

  function handleChange(change: number) {
    setInitialNumber(change);
  }

  function handlePress(){
    numberContext.defineInitialNumber(initialNumber);
    navigation.navigate("Counter");
  }

  return (
    <View>
      <Text style={style.enterNumber}>Enter the number</Text>
      <TextInput
        style={style.input}
        placeholder="Enter number"
        value={String(initialNumber)}
        onChangeText={initialNumber => {
          handleChange(Number(initialNumber));
        }}></TextInput>
        <Button title='Submit and go to counter' onPress={() => handlePress()} />
    </View>
  );
};

export default InitNumber;
