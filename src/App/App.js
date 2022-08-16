import React from 'react';
import { Provider } from 'react-redux';
import DetailsScreen from '../screens/detailScreen/DetailsScreen';
import store from '../redux/store/Store'


const App = () => {

  return (
    <Provider store={store} >
      <DetailsScreen />
    </Provider>

  );
};

export default App;
