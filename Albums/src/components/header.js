import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Header = ({ headerText }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.header}>{headerText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
  container: {
    // flex: 1,
    marginTop: 30,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});

export default Header;