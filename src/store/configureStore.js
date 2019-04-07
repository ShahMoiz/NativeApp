import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/root'


const rootReducer = combineReducers({
    places: placesReducer
})

let reduxCompose = compose;

if(__DEV__){
    reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, reduxCompose())
}

export default configureStore
