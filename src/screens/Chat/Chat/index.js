import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ChatRoomItem from '../../../components/Chat/ChatRoomItem'
import chatRoomData from '../../../../assets/data/ChatRoom';
import CardDetail from '../../../components/CardDetail';

const Chats = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Chat</Text>
            <FlatList data={chatRoomData} renderItem={({ item }) => <ChatRoomItem chatRoom={item} /> } 
            showsVerticalScrollIndicator={false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }, 
    title: {
        fontSize: 26, 
        fontWeight: 'bold', 
        margin: 16,
    }
})

export default Chats