const mongoose = require('mongoose');
const Transaction = require('../models/transactionModel.js');
const User = require('../models/userModel.js');
const Movie = require('../models/movieModel.js');
const ShowTime = require('../models/showtimeModel.js');
const Ticket = require('../models/ticketModel.js');
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
      const transaction = await Transaction.find({user_id: res.user.id}).sort({'_id': -1});
      if (!transaction) return res.status(404).json({msg: "Data not found"});
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({msg: error.message});
    }
  },
  createTransactionTicket: async (req, res) => {
    const ticketCode = Math.floor(1000 + Math.random() * 9000);
    const { movie_id, show_time_id, booking_seat, status } = req.body;
    const user = await User.findById(res.user.id);
    if (!user) return res.status(404).json({message: "User not found"});
    const movie = await Movie.findById(movie_id);
    if (!movie) return res.status(404).json({message: "Movie not found"});
    const showtime = await ShowTime.findOne({movie_id:movie_id,_id:show_time_id});
    if (!showtime) return res.status(404).json({message: "Showtime not found"});
    const totalCost = movie.price * booking_seat.length;
    if (user.balance < totalCost) return res.status(400).json({message: "Insufficient balance"});
    user.balance -= totalCost;
    const transaction = new Transaction({
      user_id: user._id,
      type: 'buy',
      movie_title: movie.title,
      total: totalCost,
      status: status,
    });
    const ticket = new Ticket({
      transaction_id: transaction._id,
      user_id: user._id,
      ticket_code: ticketCode,
      showtime: { 
        _id: show_time_id,
        date: showtime.date,
      },
      movie: {
        _id: movie_id,
        title: movie.title,
        poster: movie.poster,
      },
      booking_seat: booking_seat,
    });
    try {
      for (const seat of booking_seat) {
        if(showtime.seats[seat] === true) return res.status(400).json({message: `Seat already taken`})
        await ShowTime.updateOne({ _id: show_time_id }, { $set: { [`seats.${seat}`]: true } });
      }
      await user.save();
      await transaction.save();
      await ticket.save();
      res.status(201).json({message: "Transaction Successfuly"});
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },
  createTransactionTopUp: async (req, res) => {
    try {
      const { total } = req.body;
      parseInt(total)
      const user = await User.findById(res.user.id);
      if (total <= 0) return res.status(400).json({message: "Invalid amount"})
      user.balance += total;
      const transaction = new Transaction({
        user_id: user._id,
        type: 'topup',
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
      const { total } = req.body;
      const user = await User.findById(res.user.id);
      if (total <= 0) return res.status(400).json({message: "Invalid amount"})
      if (total > user.balance) return res.status(400).json({message: "Insufficient balance"});
      user.balance -= parseInt(total);
      const transaction = new Transaction({
        user_id:  user._id,
        type: 'withdraw',
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