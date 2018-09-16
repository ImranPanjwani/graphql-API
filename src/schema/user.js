import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        me: User,
        user(id: ID!): User,
        users : [User]! 
    }
    type User {
        username: String!,
        age: Int!,
        messages: [Message]!,
        role: Role
    }
    enum Role {
        ADMIN
        USER
    }`;
