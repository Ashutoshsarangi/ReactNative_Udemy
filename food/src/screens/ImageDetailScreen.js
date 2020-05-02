import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ImageDetail = ({ navigation }) => {
  const info = navigation.getParam('name');
  const star = navigation.getParam('rating');
  const price = navigation.getParam('price');
  return (
    <>
      <Text>
        Name --> {info}</Text>

      <Text>price --> {price}</Text>
      <Text>Rating --> {star}
      </Text>
    </>
  );

}

const styles = StyleSheet.create({});

export default ImageDetail;