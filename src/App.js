import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {AppNavigator} from './navigation/app.navigator';
import {store, persistedStore} from './store/configureStore';
import FullScreenLoader from './screens/FullScreenLoader';

function App() {
  // console.log(store.getState(), 'store');
  // store.dispatch({type: 'SELECT_ORDER', payload: {temp: 'for checking'}});
  // console.log(store.getState());
  console.log(store.getState(), 'getstate');
  return (
    <Provider store={store}>
      <PersistGate
        loading={<FullScreenLoader loading />}
        persistor={persistedStore}>
        <AppNavigator />
        {store.getState().isLoading && <FullScreenLoader loading={true} />}
      </PersistGate>
    </Provider>
  );
}

export default App;
