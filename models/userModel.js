const mongoose = require('mongoose');

const userShcema = new mongoose.Schema({
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
  },
  name:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  },
  balance:{
    type: Number,
    default: 0,
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  role:{
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
    required: true
  },
},{timestamps: true})

module.exports = mongoose.model('user', userShcema);