const Neighborhood = require("../models/Neighborhoods");
const Restaurant = require("../models/Restaurant");

const resolvers = {
  Query: {
    numberSix() {
      return 6;
    },
    numberSeven() {
      return 7;
    },
    async restaurants() {
      return await Restaurant.find();
    },
  },

  Mutation: {
    async createRestaurant(_, { restaurantInput: { name } }) {
      const createdRestaurant = new Restaurant({
        name: name,
      });
      const res = await createdRestaurant.save();
      return res;
    },
  },
};

module.exports = resolvers;
