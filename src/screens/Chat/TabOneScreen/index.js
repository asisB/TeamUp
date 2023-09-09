import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { blue, red } from 'react-native-reanimated'
import ChatRoomItem from '../../../components/Chat/ChatRoomItem'

const TabOneScreen = () => {
    return (
        <View style={styles.page}>
            <ChatRoomItem/>
            <ChatRoomItem/>
            <ChatRoomItem/>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white', 
        flex: 1,
    }
})

export default TabOneScreen