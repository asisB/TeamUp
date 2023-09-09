/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
