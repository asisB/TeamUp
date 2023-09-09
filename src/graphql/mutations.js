/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeamup = /* GraphQL */ `
  mutation CreateTeamup(
    $input: CreateTeamupInput!
    $condition: ModelTeamupConditionInput
  ) {
    createTeamup(input: $input, condition: $condition) {
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
export const updateTeamup = /* GraphQL */ `
  mutation UpdateTeamup(
    $input: UpdateTeamupInput!
    $condition: ModelTeamupConditionInput
  ) {
    updateTeamup(input: $input, condition: $condition) {
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
export const deleteTeamup = /* GraphQL */ `
  mutation DeleteTeamup(
    $input: DeleteTeamupInput!
    $condition: ModelTeamupConditionInput
  ) {
    deleteTeamup(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
