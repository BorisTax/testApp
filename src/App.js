import React from 'react';
import MainScreen from './MainScreen';
import ImageScreen from './ImageScreen';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {mainReducer} from './reducers';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
const Stack = createStackNavigator(
  {
    Main: {screen: MainScreen},
    Image: {screen: ImageScreen},
  },
  {
    initialRootName: 'Main',
  },
);
const store = createStore(mainReducer, applyMiddleware(thunk));
const AppContainer = createAppContainer(Stack);
const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
export default App;
