import React from 'react';
import MainScreen from './MainScreen';
import ImageScreen from './ImageScreen';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {mainReducer} from './reducers';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { watchFetch } from './sagas';
const Stack = createStackNavigator(
  {
    Main: {screen: MainScreen},
    Image: {screen: ImageScreen},
  },
  {
    initialRootName: 'Main',
  },
);
const saga=createSagaMiddleware();
const store = createStore(mainReducer, applyMiddleware(saga));
saga.run(watchFetch);

const AppContainer = createAppContainer(Stack);
const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
export default App;
