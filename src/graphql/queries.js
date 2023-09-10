/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      createdAt
      content
      senderID
      receiverID
      sender {
        id
        name
        image
        bio
        gender
        skills
        language
        sports
        age
        location
        createdAt
        updatedAt
        __typename
      }
      receiver {
        id
        name
        image
        bio
        gender
        skills
        language
        sports
        age
        location
        createdAt
        updatedAt
        __typename
      }
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
        createdAt
        content
        senderID
        receiverID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByReceiverID = /* GraphQL */ `
  query MessagesByReceiverID(
    $receiverID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByReceiverID(
      receiverID: $receiverID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        content
        senderID
        receiverID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPartner = /* GraphQL */ `
  query GetPartner($id: ID!) {
    getPartner(id: $id) {
      id
      status
      userID
      user {
        id
        name
        image
        bio
        gender
        skills
        language
        sports
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
export const listPartners = /* GraphQL */ `
  query ListPartners(
    $filter: ModelPartnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const partnersByUserID = /* GraphQL */ `
  query PartnersByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPartnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    partnersByUserID(
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTeamup = /* GraphQL */ `
  query GetTeamup($id: ID!) {
    getTeamup(id: $id) {
      id
      User {
        id
        name
        image
        bio
        gender
        skills
        language
        sports
        age
        location
        createdAt
        updatedAt
        __typename
      }
      User1 {
        id
        name
        image
        bio
        gender
        skills
        language
        sports
        age
        location
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      teamupUserId
      teamupUser1Id
      __typename
    }
  }
`;
export const listTeamups = /* GraphQL */ `
  query ListTeamups(
    $filter: ModelTeamupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        teamupUserId
        teamupUser1Id
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      image
      bio
      gender
      skills
      language
      sports
      age
      location
      partners {
        nextToken
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        bio
        gender
        skills
        language
        sports
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
