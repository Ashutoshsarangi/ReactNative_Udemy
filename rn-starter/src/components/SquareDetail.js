import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Squaredetail = ({ title, onIncrease, onDecrease }) => {

  return (
    <View>
      <Text>{title}</Text>
      <Button
        onPress={() => {
          onIncrease()
        }}
        title={`Increase ${title}`} />
      <Button
        onPress={() => {
          onDecrease();
        }}
        title={`Decrease ${title}`} />
    </View>
  );

}

const styles = StyleSheet.create({});

export default Squaredetail;