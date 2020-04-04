import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import Chats from '../screens/Chats';

const BottomTab = createBottomTabNavigator();

export const HomeNavigator = () => (
  <BottomTab.Navigator
    initialRouteName={'Home'}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Chats') {
          iconName = 'whatsapp';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={30} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="Chats" component={Chats} />
  </BottomTab.Navigator>
);
