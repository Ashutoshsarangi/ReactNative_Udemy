import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {

  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter passworde</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newText) => {
          setName(newText);
        }}
      />
      <Text>MY Name Is {name}</Text>
      {
        name.length < 5 ?
          <Text>Password must be longer than 5 Characters</Text>
          :
          null
      }
    </View>
  );

}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    height: 50
  }
});

export default TextScreen;