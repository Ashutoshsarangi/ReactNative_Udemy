import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogFormComponent from '../components/BlogFormComponent';


const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  console.log(addBlogPost);

  return (
    <BlogFormComponent onSubmit={(title, content) => {
      addBlogPost(title, content, () => {
        navigation.navigate('Blog');
      });
    }} />
  );

}
const styles = StyleSheet.create({});

export default CreateScreen;