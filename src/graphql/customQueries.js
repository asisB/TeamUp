export const getConnectionsByUserID = /* GraphQL */ `
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
        receiver {
          age
          bio
          email
          gender
          id
          image
          language
          location
          name
          skill
          sport
          updatedAt
          username
        }
        receiverID
        senderID
        status
        updatedAt
        userID
        chatID
        connectionChatId
        lastMessage {
          content
          createdAt
          seen
          id
        }
        id
        lastMessageID
      }
      nextToken
      __typename
    }
  }
`;

export const getConnectionRequest = /* GraphQL */ `
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
        sender {
          age
          bio
          email
          gender
          id
          image
          language
          location
          name
          skill
          sport
          updatedAt
          username
        }
        receiverID
        senderID
        status
        updatedAt
        userID
        id
        lastMessageID
        lastMessage {
          chatID
          connectionID
          content
          id
          seen
          senderID
          updatedAt
          createdAt
        }
      }
      nextToken
      __typename
    }
  }
`;

export const getSentRequest = /* GraphQL */ `
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
        receiver {
          age
          bio
          email
          gender
          id
          image
          language
          location
          name
          skill
          sport
          updatedAt
          username
        }
        receiverID
        senderID
        status
        updatedAt
        userID
        id
        lastMessageID
        chatID
        createdAt
        connectionChatId
        lastMessage {
          chatID
          connectionID
          content
          id
          seen
          senderID
          updatedAt
          createdAt
        }
      }
      nextToken
      __typename
    }
  }
`;
