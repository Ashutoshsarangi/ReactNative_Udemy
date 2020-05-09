import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imagePath, score }) => {
  return (
    <View>
      <Image source={imagePath} />
      <Text>Show Image Of {title}.</Text>
      <Text>Image Score {score}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImageDetail;