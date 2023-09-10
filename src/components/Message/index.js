import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const myID = 'u1';

const Message = ({ message }) => {
    const isMe = message.user.id === myID;
     
  return (
    <View style={[styles.container, isMe ? styles.rightConatiner : styles.leftContainerMe ]}>
      <Text style={{color: isMe ? 'black' : 'white' }}>{message.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        padding: 10, 
        margin: 10, 
        borderRadius: 16, 
        maxWidth: '75%', 
    }, 
    leftContainerMe: {
        backgroundColor: 'blue',
        marginLeft: 10,
        marginRight: 'auto'
    }, 
    rightConatiner: {
        backgroundColor: 'lightgrey',
        marginRight: 10,
        marginLeft: 'auto'
    }

})

export default Message;