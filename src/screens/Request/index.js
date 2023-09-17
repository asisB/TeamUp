import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import APIService from '../../apiservices/apiService';
import Entypo from 'react-native-vector-icons/Entypo';
import {Auth} from 'aws-amplify';
import uuid from 'react-native-uuid';

const RequestScreen = () => {
  const [connections, setConnections] = useState();
  const [userId, setUserId] = useState();

  const fetchData = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      const userId = authUser.attributes.sub;
      setUserId(userId);
      const connectionRequests = await APIService.getConnectionRequest(userId);
      setConnections(
        connectionRequests.filter(item => item.status === 'REQUESTED'),
      );
    } catch (error) {
      console.log(`fetch-data:`, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onAcceptRequest = async item => {
    try {
      // Connection Status
      // REQUESTED;
      // ACCEPTED;
      // DECLINED;

      const roomInput = {connectionID: item.id, userIdD: userId, id: uuid.v4()};
      const createRoomRes = await APIService.createChatRoom(roomInput);
      if (createRoomRes.id) {
        const input = {
          id: item.id,
          status: 'ACCEPTED',
          connectionChatId: roomInput.id,
          chatID: roomInput.id,
        };
        console.log(`input : ${JSON.stringify(input, null, 2)}`);
        const res = await APIService.updateConnection(input);
        if (res.id) {
          fetchData();
        }
      }
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };

  const onDeclineRequest = async item => {
    try {
      const input = {
        id: item.id,
        status: 'DECLINED',
        connectionChatId: roomInput.id,
        chatID: roomInput.id,
      };
      const res = await APIService.updateConnection(input);
      if (res.id) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };

  const renderRequestItem = item => {
    const {image, name} = item.sender;
    return (
      <TouchableOpacity style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.midContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.text}>{item.createdAt}</Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            style={styles.acceptIcon}
            onPress={() => onAcceptRequest(item)}>
            <Entypo name="check" size={32} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDeclineRequest(item)}>
            <Entypo name="cross" size={32} color="#000" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Requests</Text>
      <FlatList
        data={connections}
        renderItem={({item}) => renderRequestItem(item)}
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
  midContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3,
  },
  acceptIcon: {
    marginEnd: 24,
  },
});

export default RequestScreen;
