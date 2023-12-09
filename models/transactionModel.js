const mongoose = require('mongoose');

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
  ticket:{
    ticket_code:{
      type: String,
      required: function () {
        return this.type === 'buy';
      },
    },
    movie_id:{
      type:mongoose.Schema.Types.ObjectId,
      required: function () {
        return this.type === 'buy';
      },
    },
    show_time_id:{
      type:mongoose.Schema.Types.ObjectId,
      required: function () {
        return this.type === 'buy';
      },
    },
    booking_seat:{
      type: Array,
      required: function () {
        return this.type === 'buy';
      },
    },
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
