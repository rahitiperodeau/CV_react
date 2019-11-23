import { combineReducers } from 'redux';
import pageReducer from './PageReducer';

const globalReducer = combineReducers({
    pageReducer:pageReducer
});

export default globalReducer;