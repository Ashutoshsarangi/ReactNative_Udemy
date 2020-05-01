import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Squaredetail from '../components/SquareDetail';

const COLOR_INCLREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  /**
   * 
   * @param {string} color === 'red', 'green', 'blue'
   * @param {number} change ==== +15 / -15
   */
  const setColor = (color, change) => {
    if (color === 'red') {
      console.log('This Function called');
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
    } else if (color === 'green') {
      console.log('This Function called');
      if (green + change > 255 || green + change < 0) {
        return;
      } else {
        setGreen(green + change);
      }
    } else {
      if (blue + change > 255 || blue + change < 0) {
        return;
      } else {
        setBlue(blue + change);
      }
    }
  }

  console.log(red);

  return (
    <View>
      <Squaredetail
        onIncrease={() => {
          setColor('red', COLOR_INCLREMENT);
        }}
        onDecrease={() => {
          setColor('red', -1 * COLOR_INCLREMENT);
        }}
        title='red' />
      <Squaredetail
        onIncrease={() => {
          setColor('green', COLOR_INCLREMENT);
        }}
        onDecrease={() => {
          setColor('green' - 1 * COLOR_INCLREMENT);
        }}
        title='green' />
      <Squaredetail
        onIncrease={() => {
          setColor('blue', COLOR_INCLREMENT);
        }}
        onDecrease={() => {
          setColor('blue' - 1 * COLOR_INCLREMENT);
        }}
        title='blue' />

      <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
  );

}

const styles = StyleSheet.create({});

export default SquareScreen;