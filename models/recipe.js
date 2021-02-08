let mongoose = require("mongoose"),
  Schema = mongoose.Schema;

let RecipeSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  steps: {
    type: String,
    required: true,
  },
  yield: {
    type: Number,
  },
  yield_type: {
    type: String,
  },
  created_by: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated_by: {
    type: String,
  },
  updated_last: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
    unique: true,
    required: true,
  },
});

mongoose.model("Recipe", RecipeSchema);
