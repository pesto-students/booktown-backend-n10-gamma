import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    filterLanguage(language: String!): [Book!]!
    filterType(type: String!): [Book!]!
    books: [Book!]!
    filterPrice(min: Float!, max: Float!): [Book!]!
  }

  type Book {
    id: ID!
    title: String
    subTitle: String
    author: String
    published: String
    publisher: String
    pages: Int
    description: String
    files: [String]
    condition: String
    language: String
    price: Int
    originalPrice: Int
    status: String
    format: String
    subcategory: String
    category: String
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
