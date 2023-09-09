import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const ChatRoomItem = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG' }} style={styles.image} />
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>4</Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.row}>
                        <Text style={styles.name}>Elon Musk</Text>
                        <Text style={styles.text}>11:11 AM</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.text}>Hola Hola coca cola</Text>
                </View>
            </View>
        </View>
    )
}

export default ChatRoomItem;