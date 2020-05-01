import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi! Ashu</Text>
      <Button style={styles.someMargin}
        onPress={() => { navigation.navigate('Component') }}
        title="Go to Component Screen"
      />
      <Button style={styles.someMargin}
        onPress={() => { navigation.navigate('List') }}
        title="Go to List Screen"
      />
      <Button style={styles.someMargin}
        onPress={() => { navigation.navigate('Image') }}
        title="Go to Image Screen"
      />
      <Button style={styles.someMargin}
        onPress={() => { navigation.navigate('Counter') }}
        title="Go to Counter Screen"
      />
      <Button style={styles.someMargin}
        onPress={() => { navigation.navigate('Color') }}
        title="Go to Color Screen"
      />
      <Button style={styles.someMargin}
        onPress={() => { navigation.navigate('Square') }}
        title="Go to Square Screen"
      />
      <Button style={styles.someMargin}
        onPress={() => { navigation.navigate('Text') }}
        title="Go to Text Screen"
      />
      <Button style={styles.someMargin}
        onPress={() => { navigation.navigate('Box') }}
        title="Go to Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  someMargin: {
    marginVertical: 30
  }
});

export default HomeScreen;
