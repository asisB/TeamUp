import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/AuthenticationScreen/SignInScreen';
import SignUpScreen from '../screens/AuthenticationScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/AuthenticationScreen/ForgotPasswordScreen';
import ConfirmEmailScreen from '../screens/AuthenticationScreen/ConfirmEmailScreen';
import NewPasswordScreen from '../screens/AuthenticationScreen/NewPasswordScreen';
import NavigationBar from '../components/NavigationBar';
import Chats from '../screens/Chat/Chat';
import ChatRoomItem from '../components/Chat/ChatRoomItem';
import NotFoundScreen from '../screens/Chat/NotFoundScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabBar" component={NavigationBar} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="ChatRoom" component={ChatRoomItem} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
