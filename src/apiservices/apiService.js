import {API} from 'aws-amplify';
import {graphqlOperation} from '@aws-amplify/api';

// GraphQl
import {
  getUser,
  listUsers,
  listPartners,
  getConnection,
  messagesByChatID,
} from '../../src/graphql/queries';
import {
  getConnectionRequest,
  getConnectionsByUserID,
  getSentRequest,
} from '../../src/graphql/customQueries';
import {
  createChat,
  createConnection,
  createMessage,
  createUser,
  updateUser,
} from '../../src/graphql/mutations';
import {updateConnection} from '../graphql/customMutation';

const APIService = {
  getUser: async id => {
    try {
      console.log(`getUser: id ${id}`);
      const profile = await API.graphql({
        ...graphqlOperation(getUser, {id: id}),
      });
      const _getMeData = profile.data?.getUser;
      return _getMeData;
    } catch (error) {
      console.log('Error getMe()', error);
    }
  },
  createUser: async input => {
    try {
      console.log(`input : ${JSON.stringify(input, null, 2)}`);
      const updateRes = await API.graphql({
        ...graphqlOperation(createUser, {input}),
      });
      return updateRes.data;
    } catch (error) {
      console.log('Error createUser()', error);
    }
  },
  updateUser: async input => {
    try {
      console.log(`input : ${JSON.stringify(input, null, 2)}`);
      const updateRes = await API.graphql({
        ...graphqlOperation(updateUser, {input}),
      });
      return updateRes.data;
    } catch (error) {
      console.log('Error createUser()', error);
    }
  },
  getAllUser: async () => {
    try {
      const profile = await API.graphql({
        ...graphqlOperation(listUsers),
      });
      const _getMeData = profile.data.listUsers.items || [];
      return _getMeData;
    } catch (error) {
      console.log('Error getAllUser()', error);
    }
  },
  getConnectedUser: async userID => {
    try {
      const profile = await API.graphql({
        ...graphqlOperation(getConnectionsByUserID, {userID: userID}),
      });
      const _getMeData = profile.data.connectionsByUserID.items || [];
      return _getMeData;
    } catch (error) {
      console.log('Error getConnectedUser()', error);
    }
  },
  createConnection: async input => {
    try {
      const profile = await API.graphql({
        ...graphqlOperation(createConnection, {input: input}),
      });
      const _getMeData = profile.data;
      return _getMeData;
    } catch (error) {
      console.log('Error createConnection()', error);
    }
  },
  getConnectionRequest: async userID => {
    try {
      const profile = await API.graphql({
        ...graphqlOperation(getConnectionRequest, {receiverID: userID}),
      });
      const _getMeData = profile.data.connectionsByReceiverID.items || [];
      return _getMeData;
    } catch (error) {
      console.log('Error getConnectedUser()', error);
    }
  },
  getSendRequest: async userID => {
    try {
      const profile = await API.graphql({
        ...graphqlOperation(getSentRequest, {senderID: userID}),
      });
      const _getMeData = profile.data.connectionsBySenderID.items || [];
      return _getMeData;
    } catch (error) {
      console.log('Error getConnectedUser()', error);
    }
  },
  updateConnection: async input => {
    try {
      const profile = await API.graphql({
        ...graphqlOperation(updateConnection, {input: input}),
      });
      const _getMeData = profile.data.updateConnection;
      return _getMeData;
    } catch (error) {
      console.log('Error updateConnection()', error);
    }
  },
  createChatRoom: async input => {
    try {
      const profile = await API.graphql({
        ...graphqlOperation(createChat, {input: input}),
      });
      const _getMeData = profile.data.createChat;
      return _getMeData;
    } catch (error) {
      console.log('Error createChat()', error);
    }
  },
  getMessages: async chatID => {
    try {
      const profile = await API.graphql({
        ...graphqlOperation(messagesByChatID, {chatID: chatID}),
      });
      const _getMeData = profile.data.messagesByChatID.items || [];
      return _getMeData;
    } catch (error) {
      console.log('Error getMessages()', error);
    }
  },
  sendMessage: async input => {
    try {
      const profile = await API.graphql({
        ...graphqlOperation(createMessage, {input: input}),
      });
      const _getMeData = profile.data.createMessage;
      return _getMeData;
    } catch (error) {
      console.log('Error createChat()', error);
    }
  },
  updateLastMessage: async input => {
    try {
      const profile = await API.graphql({
        ...graphqlOperation(updateConnection, {input: input}),
      });
      const _getMeData = profile.data.createMessage;
      return _getMeData;
    } catch (error) {
      console.log('Error createChat()', error);
    }
  },
};

export default APIService;
