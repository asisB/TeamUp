import React, { useEffect, useState } from 'react';
import { Text, Image, View, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationBar from '../components/NavigationBar';
import Chats from '../screens/Chat/Chat';
import NotFoundScreen from '../screens/Chat/NotFoundScreen';
import ChatRoomScreen from '../screens/Chat/ChatRoomScreen';
import styles from '../components/Chat/ChatRoomItem/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabBar" component={NavigationBar} options={{ headerTitle: ChatsHeader}} />
        <Stack.Screen name="Chats" component={Chats} options={{ headerTitle: ChatsHeader }} />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={{
          headerTitle: "ChatHeader",
          headerBackTitleVisible: false,
        }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ headerTitle: 'Not Found' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ChatsHeader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <Text style={{ flex: 1, textAlign: 'center',  fontWeight: 'bold', marginLeft: 30 }}>Signal</Text>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
        style={{ width: 30, height: 30, borderRadius: 30, marginRight: 30}}
      />
    </View>

  )
}

export default MainNavigation;
