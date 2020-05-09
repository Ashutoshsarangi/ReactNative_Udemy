import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const BlogFormComponent = ({ onSubmit, initialValues = { title: '', content: '' } }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}> Enter Title: </Text>
      <TextInput style={styles.input} value={title}
        onChangeText={(text) => {
          setTitle(text)
        }} />
      <Text style={styles.label}> Enter Content: </Text>
      <TextInput style={styles.input} value={content}
        onChangeText={(text) => {
          setContent(text)
        }} />
      {/* <TouchableOpacity> */}
      <Button
        title='Save'
        onPress={() => {
          onSubmit(title, content)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5
  },
  input: {
    borderWidth: 1,
    fontSize: 18,
    height: 50,
    margin: 5,
    padding: 5,
    marginVertical: 5
  }
});

export default BlogFormComponent;