import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import SearchScreen from './src/screens/SearchScreen'
import ImageDetail from './src/screens/ImageDetailScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ImageDetail: ImageDetail
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Bussiness Search'
    }
  }
);

export default createAppContainer(navigator);