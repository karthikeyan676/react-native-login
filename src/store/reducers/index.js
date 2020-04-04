import {combineReducers} from 'redux';
import AuthReducer from './authReducers';
import HomeReducer from './homeReducers';

export default combineReducers({
  auth: AuthReducer,
  home: HomeReducer,
});
