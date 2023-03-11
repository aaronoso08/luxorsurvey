/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUntitledModel = /* GraphQL */ `
  query GetUntitledModel($id: ID!) {
    getUntitledModel(id: $id) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUntitledModels = /* GraphQL */ `
  query ListUntitledModels(
    $filter: ModelUntitledModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUntitledModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUntitledModels = /* GraphQL */ `
  query SyncUntitledModels(
    $filter: ModelUntitledModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUntitledModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
