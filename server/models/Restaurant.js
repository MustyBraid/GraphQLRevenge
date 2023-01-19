const { model, Schema } = require("mongoose");

// const restaurantSchema = new Schema({
//   _id: String,
//   address: {
//     building: String,
//     coord: [Number],
//     street: String,
//     zipcode: String,
//   },
//   borough: String,
//   cuisine: String,
//   grades: [
//     {
//       score: Number,
//       date: Date,
//       grade: String,
//     },
//   ],
//   name: String,
//   restaurant_id: String,
// });

const restaurantSchema = new Schema({
  name: String,
});

module.exports = model("Restaurant", restaurantSchema);
