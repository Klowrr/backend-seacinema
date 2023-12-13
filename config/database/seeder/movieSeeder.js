const mongoose = require('mongoose');
const Movie = require('../../../models/movieModel.js');

module.exports = {
  model: Movie,
  data:[
    {
      title: "Mystical Enchantment",
      description: "A thrilling fantasy adventure that takes you on a magical journey.",
      release_date: "07-15-2021",
      rating: 4.5,
      age_rating: 13,
      poster: "https://res.cloudinary.com/djhouzggx/image/upload/v1702198577/seacinema/ygrzj0fdgjpneowtyefs.jpg",
      price: 12000
    },
    {
      title: "Dark Secrets",
      description: "Uncover the mysteries of a small town haunted by its dark past.",
      release_date: "05-08-2018",
      rating: 3.8,
      age_rating: 16,
      poster: "https://res.cloudinary.com/djhouzggx/image/upload/v1702198577/seacinema/ygrzj0fdgjpneowtyefs.jpg",
      price: 8500
    },
    {
      title: "Eternal Love",
      description: "A romantic tale transcending time and space, filled with love and heartbreak.",
      release_date: "12-21-2015",
      rating: 4.2,
      age_rating: 15,
      poster: "https://res.cloudinary.com/djhouzggx/image/upload/v1702198577/seacinema/ygrzj0fdgjpneowtyefs.jpg",
      price: 11000
    },
    {
      title: "Cybernetic Rebellion",
      description: "In a dystopian future, machines rise against their creators in a battle for survival.",
      release_date: "03-30-2022",
      rating: 4.1,
      age_rating: 14,
      poster: "https://res.cloudinary.com/djhouzggx/image/upload/v1702198577/seacinema/ygrzj0fdgjpneowtyefs.jpg",
      price: 9500
    },
    {
      title: "Ghostly Whispers",
      description: "A spine-chilling horror film that will leave you checking under your bed.",
      release_date: "10-12-2019",
      rating: 4.7,
      age_rating: 18,
      poster: "https://res.cloudinary.com/djhouzggx/image/upload/v1702198577/seacinema/ygrzj0fdgjpneowtyefs.jpg",
      price: 10500
    },
    {
      title: "Space Odyssey",
      description: "Embark on an epic journey through the cosmos in this visually stunning sci-fi adventure.",
      release_date: "06-05-2016",
      rating: 4.4,
      age_rating: 12,
      poster: "https://res.cloudinary.com/djhouzggx/image/upload/v1702198577/seacinema/ygrzj0fdgjpneowtyefs.jpg",
      price: 10000
    },
    {
      title: "Criminal Minds",
      description: "A gripping crime thriller that keeps you on the edge of your seat until the very end.",
      release_date: "09-18-2017",
      rating: 4.0,
      age_rating: 17,
      poster: "https://res.cloudinary.com/djhouzggx/image/upload/v1702198577/seacinema/ygrzj0fdgjpneowtyefs.jpg",
      price: 8800
    },
    {
      title: "Forgotten Realms",
      description: "Enter a world of magic and adventure in this fantasy epic.",
      release_date: "11-07-2020",
      rating: 4.3,
      age_rating: 14,
      poster: "https://res.cloudinary.com/djhouzggx/image/upload/v1702198577/seacinema/ygrzj0fdgjpneowtyefs.jpg",
      price: 9600
    },
    {
      title: "Timeless Pursuit",
      description: "A time-traveling thriller that challenges the boundaries of reality.",
      release_date: "04-02-2014",
      rating: 4.6,
      age_rating: 15,
      poster: "https://res.cloudinary.com/djhouzggx/image/upload/v1702198577/seacinema/ygrzj0fdgjpneowtyefs.jpg",
      price: 11000
    },
    {
      title: "Lost in Translation",
      description: "A heartwarming story about connections made in the most unexpected places.",
      release_date: "08-14-2019",
      rating: 4.8,
      age_rating: 13,
      poster: "https://res.cloudinary.com/djhouzggx/image/upload/v1702198577/seacinema/ygrzj0fdgjpneowtyefs.jpg",
      price: 9800
    },
  ]
}