/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      first_name
      last_name
      email
      user_type
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      id
      first_name
      last_name
      email
      user_type
    }
  }
`;
