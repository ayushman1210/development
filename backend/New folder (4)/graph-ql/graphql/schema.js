const {gql}=require('graphql-tag');
const typeDefs=gql`

type Product {
    id:ID!
    title:String!
    category:String!
    price:Float!
    instock:Boolean!
}
    type Query{
  product:[Product]
    }
    `;

    module.exports=typeDefs;