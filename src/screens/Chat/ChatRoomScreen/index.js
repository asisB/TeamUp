import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Message from '../../../components/Message';
import chatRoomData from '../../../../assets/data/Chats';
import MessageInput from '../../../components/MessageInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/core';

const ChatRoomScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    navigation.setOptions({title: 'Elon Musk'})
    
  return (
    <SafeAreaView style={styles.page}>
       <FlatList 
       data={chatRoomData.messages} 
       renderItem={({item}) => <Message message={item}/>} 
       inverted/>
        <MessageInput/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white', 
        flex: 1,
    }
})

export default ChatRoomScreen;