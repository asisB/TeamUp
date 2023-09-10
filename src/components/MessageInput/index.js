import { 
    View, 
    StyleSheet,
     TextInput, 
     Pressable, 
     Alert, 
     KeyboardAvoidingView, 
     Platform } from 'react-native'
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.log("sending: ", message);
        setMessage('');
    }

    const onPress = () => {
        if (message) {
            sendMessage();
        }else {
            Alert.alert("Write a message!");
        }
    }
    console.warn(message);
    return (
        <KeyboardAvoidingView style={styles.root} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={100}>
            <View style={styles.inputContainer}>
                <FontAwesome name="smile-o" size={24} color="#808080" style={styles.icon} />
                <TextInput style={styles.input} value={message} onChangeText={setMessage} placeholder="Send a message...." />
                <FontAwesome name="camera" size={24} color="gray" style={styles.icon} />
                <FontAwesome name="microphone" size={24} color="gray" style={styles.icon} />

            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
            <Feather name="send" size={20} color="white" style={styles.icon} />
            </Pressable >
        </KeyboardAvoidingView>


    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,

    },
    buttonContainer: {
        width: 40,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputContainer: {
        backgroundColor: 'lightgrey',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'lightgrey',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,

    },
    buttonText: {
        color: 'white',
        fontSize: 32,

    }, 
    input: {
        flex: 1, 
        marginHorizontal: 5,

    }, 
    icon: {
        marginHorizontal: 5, 
    }
})

export default MessageInput;