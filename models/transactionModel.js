const mongoose = require('mongoose');
const MovieModel = require('./movieModel.js');
const ShowTimeModel = require('./showtimeModel.js');
const transactionSchema = new mongoose.Schema({
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    required: true
  },
  type:{
    type: String,
    enum: ['buy', 'topup','withdraw'],
    required: true
  },
  movie_title:{
    type: String,
  },
  ticket:{
    type:mongoose.Schema.Types.ObjectId,
  },
  total:{
    type: Number,
    required: true,
  },
  status:{
    type: String,
    enum: ['success', 'refund'],
    default: 'success',
    required: true
  },
},{timestamps: true})

module.exports = mongoose.model('transaction', transactionSchema);
