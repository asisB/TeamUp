/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAt
      updatedAt
      __typename
    }
  }
`;
