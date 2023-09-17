import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChatRoomItem from '../../../components/Chat/ChatRoomItem';
import chatRoomData from '../../../../assets/data/ChatRoom';
import {useNavigation} from '@react-navigation/native';
import APIService from '../../../apiservices/apiService';
import {Auth} from 'aws-amplify';
import uuid from 'react-native-uuid';

const Chats = () => {
  const navigation = useNavigation();

  const [chat, setChat] = useState();
  const [userId, setUserId] = useState();

  const fetchData = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      const userId = authUser.attributes.sub;
      setUserId(userId);

      let allChatRooms = [];

      const receivedChatConnection = await APIService.getConnectionRequest(
        userId,
      );
      const sentChatConnection = await APIService.getSendRequest(userId);

      if (receivedChatConnection) {
        const mappedConnection = receivedChatConnection
          .filter(item => item.status === 'ACCEPTED')
          .map(item => {
            return {
              receiverID: item.receiverID,
              senderID: item.senderID,
              updatedAt: item.updatedAt,
              userID: item.userID,
              id: item.id,
              lastMessageID: item.lastMessageID,
              chatID: item.chatID,
              createdAt: item.createdAt,
              connectionChatId: item.connectionChatId,
              name: item.sender.name,
              image: item.sender.image,
              lastMessage: item.lastMessage,
            };
          });
        allChatRooms = [...mappedConnection];
      }

      if (sentChatConnection) {
        const mappedConnection = sentChatConnection
          .filter(item => item.status === 'ACCEPTED')
          .map(item => {
            return {
              receiverID: item.receiverID,
              senderID: item.senderID,
              updatedAt: item.updatedAt,
              userID: item.userID,
              id: item.id,
              lastMessageID: item.lastMessageID,
              chatID: item.chatID,
              createdAt: item.createdAt,
              connectionChatId: item.connectionChatId,
              name: item.receiver.name,
              image: item.receiver.image,
              lastMessage: item.lastMessage,
            };
          });
        allChatRooms = [...allChatRooms, ...mappedConnection];
      }

      console.log(
        `filter-connection-data: ${JSON.stringify(allChatRooms, null, 2)}`,
      );
      setChat(allChatRooms);
    } catch (error) {
      console.log(`fetch-data:`, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRequestPress = () => {
    navigation.navigate('RequestScreen');
  };

  const createChatRoom = async item => {
    try {
      console.log(`create-chat-room : called()`);
      const roomInput = {connectionID: item.id, userIdD: userId, id: uuid.v4()};
      const createRoomRes = await APIService.createChatRoom(roomInput);
      if (createRoomRes.id) {
        const input = {
          id: item.id,
          connectionChatId: roomInput.connectionID,
          chatID: roomInput.connectionID,
        };
        console.log(`input : ${JSON.stringify(input, null, 2)}`);
        await APIService.updateConnection(input);
        navigation.navigate('ChatRoom', {
          chat: {
            ...item,
            chatID: input.chatID,
            connectionChatId: input.connectionChatId,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChatItemPress = connection => {
    console.log(`chat-press : ${JSON.stringify(connection)}`);
    if (!connection.chatID) {
      createChatRoom(connection);
    } else {
      navigation.navigate('ChatRoom', {chat: connection});
    }
  };

  const renderChatItem = item => {
    const {lastMessage, name, image} = item;
    return (
      <TouchableOpacity
        onPress={() => onChatItemPress(item)}
        style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />

        {lastMessage && lastMessage?.seen === false && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{1}</Text>
          </View>
        )}
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.text}>{lastMessage?.createdAt}</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}>
            {lastMessage?.content}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Chat</Text>
        <TouchableOpacity onPress={onRequestPress}>
          <Text style={styles.request}>Request</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={chat}
        renderItem={({item}) => renderChatItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 16,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  request: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 16,
    color: 'lightblue',
  },
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    color: 'gray',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 55,
    top: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3,
  },
});

export default Chats;
