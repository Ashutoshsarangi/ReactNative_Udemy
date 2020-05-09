import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 12 },
    { name: 'Friend #2', age: 20 },
    { name: 'Friend #3', age: 32 },
    { name: 'Friend #4', age: 42 },
    { name: 'Friend #5', age: 12 },
    { name: 'Friend #6', age: 39 },
    { name: 'Friend #7', age: 12 },
    { name: 'Friend #8', age: 100 },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => { friend.name }}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.listStyle}>{item.name} - Age {item.age}</Text>
      }}
    />
  );
}

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 50
  }
});

export default ListScreen;