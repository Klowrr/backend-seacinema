const mongoose = require('mongoose');
const Transaction = require('../models/transactionModel.js');
const User = require('../models/userModel.js');
const Movie = require('../models/movieModel.js');
const ShowTime = require('../models/showtimeModel.js');

module.exports = {
  getTransactions: async (req, res) => {
    try {
      let response;
      response = await Transaction.find();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({msg: error.message});
    }
  },
  getTransactionById: async (req, res) => {
    try {
      const transaction = await Transaction.findById(req.params.id);
      if (!transaction) return res.status(404).json({msg: "Data not found"});
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({msg: error.message});
    }
  },
  getTransactionByUserId: async (req, res) => {
    try {
      const transaction = await Transaction.findOne({userId: req.id});
      if (!transaction) return res.status(404).json({msg: "Data not found"});
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({msg: error.message});
    }
  },
  createTransactionTicket: async (req, res) => {
    const ticketCode = Math.floor(1000 + Math.random() * 9000);
    const { type, movie_id, show_time_id, booking_seat, status } = req.body;
    const user = await User.findById(res.user.id);
    const movie = await Movie.findById(movie_id);
    const showtime = await ShowTime.findById({movie_id:movie_id,_id:show_time_id});
    if (!user && !movie && !showtime) return res.status(404).json({message: "User, Movie or showtime not found"});
    try {
      const totalCost = movie.price * booking_seat.length;
      if (user.balance < totalCost) return res.status(400).json({message: "Insufficient balance"});
      user.balance -= totalCost;
      const transaction = new Transaction({
        user_id: user._id,
        type: type,
        ticket: {
          ticket_code: ticketCode,
          movie_id: movie_id,
          show_time_id: show_time_id,
          booking_seat: booking_seat,
        },
        total: totalCost,
        status: status,
      });
      await user.save();
      await transaction.save();
      res.status(201).json({message: "Transaction Successfuly"});
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },
  createTransactionTopUp: async (req, res) => {
    try {
      const { type, total } = req.body;
      const user = await User.findById(res.user.id);
      if (total < 0) return res.status(400).json({message: "Invalid amount"})
      user.balance += parseInt(total);
      const transaction = new Transaction({
        user_id: user._id,
        type: type,
        total: total,
      });
      await user.save();
      await transaction.save();
      res.status(201).json({message: "Top Up successfuly"});
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },
  createTransactionWithdraw: async (req, res) => {
    try {
      const { type, total } = req.body;
      const user = await User.findById(res.user.id);
      if (total > user.balance) return res.status(400).json({message: "Insufficient balance"});
      user.balance -= parseInt(total);
      const transaction = new Transaction({
        user_id:  user._id,
        type: type,
        total: total,
      });
      await user.save();
      await transaction.save();
      res.status(201).json({message: "Withdraw successfuly"});
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },
  deleteTransaction: async (req, res) => {
    try {
      const transaction = await Transaction.findById(req.body.transaction_id);
      await transaction.deleteOne();
      res.status(200).json({message: "Transaction deleted successfuly"});
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }
}