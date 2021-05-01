import { combineReducers } from 'redux';
import filmeReducer from './filmeReducer';

const reducers = combineReducers({
    filme: filmeReducer
});

export default reducers;