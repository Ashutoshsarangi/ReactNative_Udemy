import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {
  const name = 'Ashutosh';
  return (
    <View>
      <Text style={style.textStyleTitle}>Getting Started With react Native</Text>
      <Text style={style.textStyleSubtitle}>my Name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyleTitle: {
    fontSize: 45
  },
  textStyleSubtitle: {
    fontSize: 20
  }

});

export default ComponentScreen;