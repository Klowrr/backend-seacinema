const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv").config();
module.exports = function () {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    console.log("connected to db");
  } catch (error) {
    handleError(error);
  }
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
  });
}