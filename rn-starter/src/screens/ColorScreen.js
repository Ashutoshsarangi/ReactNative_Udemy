import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  return (
    <View>
      <Button title="Add A Color" onPress={() => {
        setColor([...colors, RandomColor()])
      }} />
      <FlatList
        keyExtractor={(item) => {
          item
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={colors}
        renderItem={({ item }) => {
          return <View style={{ width: 100, height: 100, backgroundColor: item }} />
        }}
      />
    </View>
  );
};

const RandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({})

export default ColorScreen;