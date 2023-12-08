const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
      type: String,
      required: true,
    },
    description:{
      type: String,
      required: true,
    },
    release_date:{
      type: Date,
      required: true,
    },
    rating:{
      type: Number,
      required: true,
    },
    age_rating:{
      type: Number,
      required: true,
    },
    poster:{
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    },
    createdAt:{
      type: Date,
      default: Date.now,
    },
    updatedAt:{
      type: Date,
      default: Date.now,
    },
})

module.exports = mongoose.model("movies", movieSchema);
