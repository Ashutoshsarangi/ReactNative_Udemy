import React from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// https://rallycoding.herokuapp.com/api/music_albums

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="Album" />
      <AlbumList />
      <Text>Hello World ASHU</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

// export default App;

// Render the Code in the Device
/**
 * @description
 * @param 'Albums' Here referes to Application Name.
 */
AppRegistry.registerComponent('Albums', () => App);
