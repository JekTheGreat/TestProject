import React from 'react';
import {enableFreeze, enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import store, {persistor} from './ducks/store';
import {PersistGate} from 'redux-persist/integration/react';
import Navigator from './navigators/Navigator';

enableFreeze(true);
enableScreens(true);

const App = () => {
  return (
    // <Provider store={store}>
    // <PersistGate loading={null} persistor={persistor}>
    <Navigator />
    // </PersistGate>
    // </Provider>
  );
};

export default App;
