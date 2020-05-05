import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import BlogScreen from './src/screens/BlogScreen';

const navigator = createStackNavigator(
  {
    Blog: BlogScreen,
  },
  {
    initialRouteName: 'Blog',
    defaultNavigationOptions: {
      title: 'Blog'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <App />
  );
};
