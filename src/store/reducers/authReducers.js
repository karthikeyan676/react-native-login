import {COMMON_TYPES, LOADING, LOGIN_USER, AUTHENTICATED} from '../actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload,
      };
    case AUTHENTICATED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
