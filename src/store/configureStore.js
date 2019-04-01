import { createStore, combineReducers } from 'redux';

import placesReducer from './reducers/placesReducer';

const rootReducer = combineReducers({
    places: placesReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;