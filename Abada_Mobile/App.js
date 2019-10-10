/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from './app/components/Loading/loading'
import Home from './app/components/Home/index';
import Register from './app/components/Register/register'

const RootStack = createStackNavigator({
  loading:{
    screen: Loading,
    navigationOptions: {
      title:'Loading Screen',
      header: null
    }
  },
  home: {
    screen: Home,
    navigationOptions: {
      title: 'Login and Register',
      header: null
    },
  register: {
    screen: Register,
    navigationOptions: {
      title: 'HAAAIII',
      header: null
    },

  }
  
  },
},

 );
const App = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default App;

