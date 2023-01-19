const { model, Schema } = require("mongoose");

const neighborhoodSchema = new Schema({
  _id: Number,
  geometry: {
    coordinates: [[Number]],
    type: { type: String },
  },
  name: String,
});

module.exports = model("Neighborhood", neighborhoodSchema);
