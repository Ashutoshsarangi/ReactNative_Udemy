import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';



const ShowScreen = ({ navigation }) => {
  console.log(navigation.getParam('id'));
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => {
    return blogPost.id === navigation.getParam('id')
  });
  console.log(blogPost);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:-></Text>
      <Text style={{ fontSize: 18 }}>{blogPost.title}</Text>
      <Text style={styles.label}>Content:-></Text>
      <Text style={{ fontSize: 18 }}>{blogPost.content}</Text>
    </View>
  );

}

ShowScreen.navigationOptions = ({ navigation }) => {

  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => {
        navigation.navigate('Edit', { id: navigation.getParam('id') })
      }}>
        <Entypo name="pencil" size={24} color="black" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    marginTop: 20
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default ShowScreen;