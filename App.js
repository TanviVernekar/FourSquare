import React from 'react'
import { View } from 'react-native'
import {Route} from './src/navigation/Route'
import { SearchScreen } from './src/screens/SearchScreen'
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import store from './src/redux/store/Store'


let persistor = persistStore(store);

export default App=()=> {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
     <Route/>
    </PersistGate>
  </Provider>
  )
}
