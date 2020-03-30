import {createStore, combineReducers, applyMiddleware} from 'redux';
import AppFeaturesReducer from './reducers/AppFeaturesReducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers(
    {
        AppFeaturesReducer,
    }
);
const configureStore =()=>createStore(rootReducer,applyMiddleware(ReduxThunk));

export default configureStore;