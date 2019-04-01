import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import {name as appName} from './app.json';

import placesReducer from './src/store/reducers/placesReducer';

const rootReducer = combineReducers({
    places: placesReducer
});

const store = createStore(rootReducer);

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
