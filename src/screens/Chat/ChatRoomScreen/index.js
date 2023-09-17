import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Message from '../../../components/Message';
import chatRoomData from '../../../../assets/data/Chats';
import MessageInput from '../../../components/MessageInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute, useNavigation} from '@react-navigation/core';
import APIService from '../../../apiservices/apiService';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';
import {Auth} from 'aws-amplify';
const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [messages, setMessages] = useState();
  const [userId, setUserId] = useState();
  const [message, setMessage] = useState();

  /*
    Navigation props
    receiverID,
    senderID,
    updatedAt,
    userID,
    id,
    lastMessageID,
    chatID,
    createdAt,
    connectionChatId,
    name,
    image,
    lastMessage;
  */
  const {
    receiverID,
    senderID,
    updatedAt,
    userID,
    id,
    lastMessageID,
    chatID,
    createdAt,
    connectionChatId,
    name,
    image,
    lastMessage,
  } = route.params.chat;

  navigation.setOptions({title: name});

  console.log(`name`, name);

  const fetchData = async () => {
    try {
      console.log(`chat: ${connectionChatId}`);
      const authUser = await Auth.currentAuthenticatedUser();
      const userId = authUser.attributes.sub;
      setUserId(userId);

      const messages = await APIService.getMessages(chatID);
      setMessages(messages);
    } catch (error) {
      console.log(`fetch-data:`, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderMessage = item => {
    const isMe = item.senderID === userID;
    return (
      <View
        style={[
          styles.container,
          isMe ? styles.rightConatiner : styles.leftContainerMe,
        ]}>
        <Text style={{color: isMe ? 'black' : 'white'}}>{item.content}</Text>
      </View>
    );
  };

  const onSendMessage = async () => {
    if (!message) return;
    console.log(`send-input : ${chatID}`);
    try {
      const input = {
        chatID: chatID,
        connectionID: connectionChatId,
        content: message,
        id: uuid.v4(),
        seen: false,
        senderID: userId,
      };
      const updatedMessage = [...messages, input];
      setMessages(updatedMessage);
      console.log(`send-input : ${JSON.stringify(input, null, 2)}`);
      const sendMesage = await APIService.sendMessage(input);
      const lastMessageInput = {
        lastMessageID: input.id,
        id: chatID,
      };
      await APIService.updateConnection(lastMessageInput);
    } catch (error) {
      console.log(error);
      Alert.alert('Write a message!');
    }
  };

  const renderMessageInput = () => {
    return (
      <KeyboardAvoidingView
        style={styles.root}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="smile-o"
            size={24}
            color="#808080"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Send a message...."
          />
          <FontAwesome
            name="camera"
            size={24}
            color="gray"
            style={styles.icon}
          />
          <FontAwesome
            name="microphone"
            size={24}
            color="gray"
            style={styles.icon}
          />
        </View>
        <TouchableOpacity
          onPress={onSendMessage}
          style={styles.buttonContainer}>
          <Feather name="send" size={20} color="white" style={styles.icon} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  };

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={messages}
        renderItem={({item}) => renderMessage(item)}
        inverted
      />
      {renderMessageInput()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
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
    marginRight: 'auto',
  },
  rightConatiner: {
    backgroundColor: 'lightgrey',
    marginRight: 10,
    marginLeft: 'auto',
  },
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
  },
});

export default ChatRoomScreen;
