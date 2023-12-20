const mongoose = require("mongoose");
const Showtime = require("./showtimeModel.js");
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

movieSchema.pre("remove", async function (next) {
  try {
    await Showtime.remove({ movie_id: this._id });
    next();
  } catch (error) {
    next(error);
  }
})
