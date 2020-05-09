import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

const SearchBar = ({ value, onTextChange, onSearchTextSubmitted }) => {

  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={value}
        onChangeText={(ele) => {
          onTextChange(ele);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => {
          onSearchTextSubmitted();
        }}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: '#C0C0C0',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  }
});

export default SearchBar;