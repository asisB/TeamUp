import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ChatRoomItem from '../../../components/Chat/ChatRoomItem'
import chatRoomData from '../../../../assets/data/ChatRoom';

const Chats = () => {
    return (
        <View style={styles.page}>
            <FlatList data={chatRoomData} renderItem={({ item }) => <ChatRoomItem chatRoom={item} /> } 
            showsVerticalScrollIndicator={false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})

export default Chats