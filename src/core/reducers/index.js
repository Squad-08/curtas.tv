import { combineReducers } from 'redux';
import reducersCurta from './reducersCurta';

const reducers = combineReducers(
    {
        curta: reducersCurta
    }
);

export default reducers;