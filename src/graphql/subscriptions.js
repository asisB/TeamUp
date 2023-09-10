/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreatePartner = /* GraphQL */ `
  subscription OnCreatePartner($filter: ModelSubscriptionPartnerFilterInput) {
    onCreatePartner(filter: $filter) {
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
export const onUpdatePartner = /* GraphQL */ `
  subscription OnUpdatePartner($filter: ModelSubscriptionPartnerFilterInput) {
    onUpdatePartner(filter: $filter) {
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
export const onDeletePartner = /* GraphQL */ `
  subscription OnDeletePartner($filter: ModelSubscriptionPartnerFilterInput) {
    onDeletePartner(filter: $filter) {
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
export const onCreateTeamup = /* GraphQL */ `
  subscription OnCreateTeamup($filter: ModelSubscriptionTeamupFilterInput) {
    onCreateTeamup(filter: $filter) {
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
export const onUpdateTeamup = /* GraphQL */ `
  subscription OnUpdateTeamup($filter: ModelSubscriptionTeamupFilterInput) {
    onUpdateTeamup(filter: $filter) {
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
export const onDeleteTeamup = /* GraphQL */ `
  subscription OnDeleteTeamup($filter: ModelSubscriptionTeamupFilterInput) {
    onDeleteTeamup(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
