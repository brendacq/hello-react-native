import React from 'react';
import {View, Text, Button} from 'react-native';
import {style} from '../styles/style';
import Counter from './Counter';

const Home = ({ navigation}: any ) => {
  function handlePress() {
    navigation.navigate("InitNumber");
  }

  return (
    <View style={style.container}>
      <Text style={style.counter}>Hello!</Text>
      <Button title="Init counter" onPress={handlePress}>
      </Button>
    </View>
  );
};

export default Home;
