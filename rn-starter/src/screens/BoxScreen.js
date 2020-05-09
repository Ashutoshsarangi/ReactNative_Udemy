import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );

}

const styles = StyleSheet.create({
  viewStyle: {
    // borderWidth: 3,
    // borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    borderWidth: 1,
    borderColor: 'red',
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    borderWidth: 1,
    borderColor: 'red',
    width: 100,
    height: 100,
    // top: 100,
    // position: 'absolute',
    // top: 100,
    // left: 150,
    marginTop: 100,
    backgroundColor: 'green'
  },
  viewThreeStyle: {
    borderWidth: 1,
    borderColor: 'red',
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  }
});

export default BoxScreen;