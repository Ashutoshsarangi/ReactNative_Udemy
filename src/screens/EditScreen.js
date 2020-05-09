import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogFormComponent from '../components/BlogFormComponent';


const EditScreen = ({ navigation }) => {

  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => {
    return blogPost.id === navigation.getParam('id')
  });
  return (
    <BlogFormComponent
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(blogPost.id, title, content, () => {
          navigation.pop();
        })
      }
      } />
  );


}

const styles = StyleSheet.create({});

export default EditScreen;