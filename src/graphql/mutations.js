/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const deleteConnection = /* GraphQL */ `
  mutation DeleteConnection(
    $input: DeleteConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    deleteConnection(input: $input, condition: $condition) {
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
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const createConnection = /* GraphQL */ `
  mutation CreateConnection(
    $input: CreateConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    createConnection(input: $input, condition: $condition) {
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
export const updateConnection = /* GraphQL */ `
  mutation UpdateConnection(
    $input: UpdateConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    updateConnection(input: $input, condition: $condition) {
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
export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
      id
      connectionID
      userIdD
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
