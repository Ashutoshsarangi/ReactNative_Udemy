import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonComponent = ({ onPress }) => {

  return (
    <TouchableOpacity style={styles.buttonStyle}
      onPress={() => {
        onPress();
      }}
    >
      <Text style={styles.textStyle}>Buy Now</Text>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginHorizontal: 5
  }
});

export default ButtonComponent;