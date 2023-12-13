const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  transaction_id:{
    type:mongoose.Schema.Types.ObjectId,
    required: true,
  },
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    required: true,
  },
  ticket_code:{
    type: String,
    required: true,
  },
  showtime:{
    _id:{
      type:mongoose.Schema.Types.ObjectId,
      required: true,
    },
    date:{
      type: Date,
      required: true,
    },
  },
  movie:{
    _id:{
      type:mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title:{
      type: String,
      required: true,
    },
    poster:{
      type: String,
      required: true,
    },
  },
  booking_seat:{
    type: Array,
    required: true,
  },
  status:{
    type: String,
    enum: ['active', 'used','refunded'],
    default: 'active',
    required: true,
  },
})

module.exports = mongoose.model('ticket', ticketSchema);