import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Card = ({ item }) => {
  return (
    <View style={styles.viewStyle}>
      <Image
        source={{ uri: item.url }}
        style={styles.imageStyle}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text >{item.rating} Stars, {item.rating} Reviews</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 100,
    borderRadius: 4,
  },
  viewStyle: {
    borderWidth: 1,
    marginLeft: 15
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  }


});

export default Card;