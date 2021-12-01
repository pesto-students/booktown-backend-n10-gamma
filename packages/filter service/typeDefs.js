import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    filterLanguage(language: String!): [Book!]!
    filterType(type: String!): [Book!]!
    books: [Book!]!
    filterPrice(min: Float!, max: Float!): [Book!]!
  }

  type Book {
    id: Float!
    title: String!
    subTitle: String!
    author: String!
    published: String!
    publisher: String!
    pages: Float!
    description: String!
    url: String!
    type: String!
    language: String!
    price: Float!
  }

  type Mutation {
    createBooks(
      id: Float!
      title: String!
      subTitle: String!
      author: String!
      published: String!
      publisher: String!
      pages: Float!
      description: String!
      url: String!
      type: String!
      language: String!
      price: Float!
    ): Book!
  }
`;
