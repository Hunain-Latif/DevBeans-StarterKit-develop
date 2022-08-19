import React from 'react';
import { Provider } from 'react-redux';
import DetailsScreen from '../screens/detailScreen/DetailsScreen';
import store from '../redux/store/Store'
import ExploreScreen from '../screens/exploreScreen/ExploreScreen';
import Permission from '../screens/Permission';


const App = () => {

  return (
    <Provider store={store} >
      <ExploreScreen />
    </Provider>

  );
};

export default App;
