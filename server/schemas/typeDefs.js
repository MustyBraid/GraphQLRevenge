const { gql } = require("apollo-server");

const typeDefs = gql`
  type Restaurant {
    name: String!
  }

  input RestaurantInput {
    name: String
  }

  type Query {
    restaurant: Restaurant!
    restaurants: [Restaurant!]!
    numberSix: Int!
    numberSeven: Int!
  }

  type Mutation {
    addRestaurant(name: String!): Restaurant
    createRestaurant(restaurantInput: RestaurantInput): Restaurant
  }
`;

/* Apollo docs sample mutation
type Mutation {
  addBook(title: String, author: String): Book
}
*/

// const typeDefs = gql`

//     type Restaurant {
//         name: String!
//         _id: ID!
//         grades: [Review]
//         address: Address!
//     }

//     type Review {
//         date: String
//         grade: String!
//         score: Int
//     }

//     type Address {
//         building: Int!
//         coord: []
//         street: String!
//         zipcode: Int!
//     }

//     type Query {
//         names: [Name!]!
//         grades:
//     }
// `;

module.exports = typeDefs;
