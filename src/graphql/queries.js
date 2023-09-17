/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      name
      image
      bio
      gender
      skill
      language
      sport
      age
      location
      connections {
        nextToken
        __typename
      }
      chats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        name
        image
        bio
        gender
        skill
        language
        sport
        age
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getConnection = /* GraphQL */ `
  query GetConnection($id: ID!) {
    getConnection(id: $id) {
      id
      status
      userID
      senderID
      receiverID
      chatID
      lastMessageID
      sender {
        id
        username
        email
        name
        image
        bio
        gender
        skill
        language
        sport
        age
        location
        createdAt
        updatedAt
        __typename
      }
      receiver {
        id
        username
        email
        name
        image
        bio
        gender
        skill
        language
        sport
        age
        location
        createdAt
        updatedAt
        __typename
      }
      lastMessage {
        id
        chatID
        content
        senderID
        seen
        createdAt
        connectionID
        updatedAt
        __typename
      }
      chat {
        id
        connectionID
        userIdD
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      connectionChatId
      __typename
    }
  }
`;
export const listConnections = /* GraphQL */ `
  query ListConnections(
    $filter: ModelConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        userID
        senderID
        receiverID
        chatID
        lastMessageID
        createdAt
        updatedAt
        connectionChatId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const connectionsByUserID = /* GraphQL */ `
  query ConnectionsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    connectionsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        userID
        senderID
        receiverID
        chatID
        lastMessageID
        createdAt
        updatedAt
        connectionChatId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const connectionsBySenderID = /* GraphQL */ `
  query ConnectionsBySenderID(
    $senderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    connectionsBySenderID(
      senderID: $senderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        userID
        senderID
        receiverID
        chatID
        lastMessageID
        createdAt
        updatedAt
        connectionChatId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const connectionsByReceiverID = /* GraphQL */ `
  query ConnectionsByReceiverID(
    $receiverID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    connectionsByReceiverID(
      receiverID: $receiverID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        userID
        senderID
        receiverID
        chatID
        lastMessageID
        createdAt
        updatedAt
        connectionChatId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      connectionID
      userIdD
      connection {
        id
        status
        userID
        senderID
        receiverID
        chatID
        lastMessageID
        createdAt
        updatedAt
        connectionChatId
        __typename
      }
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        connectionID
        userIdD
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const chatsByUserIdD = /* GraphQL */ `
  query ChatsByUserIdD(
    $userIdD: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatsByUserIdD(
      userIdD: $userIdD
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        connectionID
        userIdD
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      chatID
      chat {
        id
        connectionID
        userIdD
        createdAt
        updatedAt
        __typename
      }
      content
      senderID
      seen
      createdAt
      connectionID
      updatedAt
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatID
        content
        senderID
        seen
        createdAt
        connectionID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByChatID = /* GraphQL */ `
  query MessagesByChatID(
    $chatID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatID(
      chatID: $chatID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatID
        content
        senderID
        seen
        createdAt
        connectionID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByConnectionID = /* GraphQL */ `
  query MessagesByConnectionID(
    $connectionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByConnectionID(
      connectionID: $connectionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatID
        content
        senderID
        seen
        createdAt
        connectionID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
