const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
  movie_id:{
    type:mongoose.Schema.Types.ObjectId,
    required: true
  },
  date:{
    type: Date,
    required: true
  },
  seats:{
    type: JSON,
    required: true
  }
},{timestamps: true})

module.exports = mongoose.model('showtime', showtimeSchema);