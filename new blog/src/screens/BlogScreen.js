import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';

const BlogScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context)
  console.log('Hey Blog Posts');
  useEffect(() => {
    getBlogPost();
    const listener = navigation.addListener('didFocus', () => {
      getBlogPost();
    });
    return () => {
      listener.remove();
    }
  }, []);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogpost) => { blogpost.id }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Show', { id: item.id })
              }
              }>
              <View style={styles.row}>
                <Text>{item.title}</Text>
                <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                  <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
BlogScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (<TouchableOpacity onPress={() => {
      navigation.navigate('Create')
    }}>
      <AntDesign name="plus" size={24} color="black" size={30} />
    </TouchableOpacity>)
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    margin: 5,
    padding: 5
  }
});

export default BlogScreen;