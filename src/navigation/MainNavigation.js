import React, {useEffect, useState} from 'react';
import {Text, Image, View, useWindowDimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationBar from '../components/NavigationBar';
import Chats from '../screens/Chat/Chat';
import NotFoundScreen from '../screens/Chat/NotFoundScreen';
import ChatRoomScreen from '../screens/Chat/ChatRoomScreen';
import EditProfileScreen from '../screens/EditProfile';
import HelpScreen from '../screens/SupportScreen/HelpScreen';
import TermsScreen from '../screens/SupportScreen/TermsScreen';
import CardDetail from '../components/CardDetail';
import RequestScreen from '../screens/Request';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Back"
          component={NavigationBar}
          options={{headerTitle: Header}}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
          options={{headerTitle: Header}}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={{
            headerTitle: 'Message',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{headerTitle: 'Not Found'}}
        />
        <Stack.Screen
          name="HelpCenter"
          component={HelpScreen}
          options={{headerTitle: 'Help Center'}}
        />
        <Stack.Screen
          name="Terms"
          component={TermsScreen}
          options={{headerTitle: 'Terms of Services'}}
        />
        <Stack.Screen
          name="CardDetail"
          component={CardDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RequestScreen"
          component={RequestScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Header = props => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, color: '#D62828', fontWeight: 'bold'}}>
        TeamUp
      </Text>
    </View>
  );
};

export default MainNavigation;
