import { combineReducers } from 'redux';
import sessionReducer from './session';
import registrationReducer from './registration';

export default combineReducers({
    session: sessionReducer,
    registration: registrationReducer,
})