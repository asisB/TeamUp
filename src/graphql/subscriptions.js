/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
      bookmarks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
      bookmarks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
      bookmarks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateConnection = /* GraphQL */ `
  subscription OnCreateConnection(
    $filter: ModelSubscriptionConnectionFilterInput
  ) {
    onCreateConnection(filter: $filter) {
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
export const onUpdateConnection = /* GraphQL */ `
  subscription OnUpdateConnection(
    $filter: ModelSubscriptionConnectionFilterInput
  ) {
    onUpdateConnection(filter: $filter) {
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
export const onDeleteConnection = /* GraphQL */ `
  subscription OnDeleteConnection(
    $filter: ModelSubscriptionConnectionFilterInput
  ) {
    onDeleteConnection(filter: $filter) {
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
export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
    onCreateChat(filter: $filter) {
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
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
    onUpdateChat(filter: $filter) {
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
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
    onDeleteChat(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateBookmark = /* GraphQL */ `
  subscription OnCreateBookmark($filter: ModelSubscriptionBookmarkFilterInput) {
    onCreateBookmark(filter: $filter) {
      id
      userID
      markedUserID
      markedUser {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBookmark = /* GraphQL */ `
  subscription OnUpdateBookmark($filter: ModelSubscriptionBookmarkFilterInput) {
    onUpdateBookmark(filter: $filter) {
      id
      userID
      markedUserID
      markedUser {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBookmark = /* GraphQL */ `
  subscription OnDeleteBookmark($filter: ModelSubscriptionBookmarkFilterInput) {
    onDeleteBookmark(filter: $filter) {
      id
      userID
      markedUserID
      markedUser {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
