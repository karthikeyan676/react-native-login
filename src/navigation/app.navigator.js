import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './home.navigator';
import {LoginNavigator} from './login.navigator';
import {useSelector} from 'react-redux';
import FullScreenLoader from '../screens/FullScreenLoader';

export const AppNavigator = () => {
  const {isLoading, isAuthenticated} = useSelector((state) => state.auth);
  console.log(isAuthenticated, 'user');
  return (
    <>
      <NavigationContainer>
        {isAuthenticated ? <HomeNavigator /> : <LoginNavigator />}
      </NavigationContainer>
      {isLoading && <FullScreenLoader loading />}
    </>
  );
};
