const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//schema fields
const recipeSchema = new Schema(
  {
    name: {
      type: String,
      //required: true,
    },
    image: {
      type: String
    },
    ingredients: {
      type: String,
      //required: true,
    },
    cuisine: {
      type: String,
      //required: true,
    },
    difficulty: {
      type: String,
      //required: true,
      enum: ["easy", "medium", "hard"],
    },
    rating: {
      type: Number,
      //required: true,
      enum: [1, 2, 3, 4, 5],
    },
    serving: {
      type: Number,
      //required: true,
    },
    prepTime: {
      type: Number,
      //required: true,
    },
    cookTime: {
      type: Number,
      //required: true,
    },
    steps: {
      type: String,
      //required: true,
    },
  },
  {
    timestamps: true,
  }
);

//EXPORT

module.exports = mongoose.model("Recipe", recipeSchema);
