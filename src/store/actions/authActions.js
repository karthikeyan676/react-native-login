import {
  COMMON_TYPES,
  LOADING,
  LOGIN_USER,
  AUTHENTICATED,
  LOGOUT_USER,
} from '../actionTypes';

export const loginUser = (userInfo) => (dispatch) => {
  dispatch({type: LOADING, payload: {isLoading: true}});

  // Faking Loader
  setTimeout(() => {
    dispatch({type: LOGIN_USER, payload: {...userInfo}});
    dispatch({type: AUTHENTICATED, payload: {isAuthenticated: true}});
    dispatch({type: LOGIN_USER, payload: {isLoading: false}});
  }, 1500);
};

export const logOut = () => (dispatch) => {
  dispatch({type: LOADING, payload: {isLoading: true}});
  setTimeout(() => {
    dispatch({type: AUTHENTICATED, payload: {isAuthenticated: false}});
    dispatch({type: LOGIN_USER, payload: {isLoading: false}});
  }, 1500);
};
