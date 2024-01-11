export const typeDefs = `
type User {
    id: ID!
    name: String!
    email:String!
    password:String!
    quotes:[Quote]
}
type Quote{
    by: ID!
    title:String!
    username:String
}
type Query{
    users: [User]
    quotes:[Quote] 
    getUserById(id:ID!): User
    getQuoteById(id:ID!) : Quote
}
`;