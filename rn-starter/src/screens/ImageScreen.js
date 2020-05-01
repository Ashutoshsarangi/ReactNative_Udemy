import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

  return (
    <View>
      <Text>Image Screen Works</Text>
      <ImageDetail title='Forest' imagePath={require('../../assets/forest.jpg')} score={9} />
      <ImageDetail title='Beach' imagePath={require('../../assets/beach.jpg')} score={7} />
      <ImageDetail title='Montain' imagePath={require('../../assets/mountain.jpg')} score={4} />
    </View>
  );

};

const styles = StyleSheet.create({

});

export default ImageScreen;