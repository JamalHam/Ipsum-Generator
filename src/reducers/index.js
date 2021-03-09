import { combineReducers } from 'redux';
import ipsumReducer from './ipsumReducer';

export default combineReducers ({
    ipsum: ipsumReducer
});