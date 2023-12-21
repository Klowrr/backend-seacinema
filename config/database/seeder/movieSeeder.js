const mongoose = require('mongoose');
const Movie = require('../../../models/movieModel.js');

module.exports = {
  model: Movie,
  data:[
    {
      "title": "Inception",
      "description": "Dom Cobb, a skilled thief, is an expert in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state.",
      "release_date": "07-16-2010",
      "rating": 8.8,
      "age_rating": 13,
      "poster": "https://res.cloudinary.com/djhouzggx/image/upload/v1703170657/seacinema/jwz3u37ombhzi0r9diq1.jpg",
      "price": 150000
    },
    {
      "title": "The Shawshank Redemption",
      "description": "Andy Dufresne, a banker, is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, where he forms a close bond with fellow inmates.",
      "release_date": "09-23-1994",
      "rating": 9.3,
      "age_rating": 15,
      "poster": "https://res.cloudinary.com/djhouzggx/image/upload/v1703170893/seacinema/xybhgbqflnmjjujkh5yh.jpg",
      "price": 130000
    },
    {
      "title": "Pulp Fiction",
      "description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "release_date": "10-14-1994",
      "rating": 8.9,
      "age_rating": 17,
      "poster": "https://res.cloudinary.com/djhouzggx/image/upload/v1703170690/seacinema/tnncyth7nyl1klk3oawy.jpg",
      "price": 140000
    },
    {
      "title": "The Dark Knight",
      "description": "Batman, with the help of allies, faces the chaos unleashed by the Joker in Gotham City and must confront the enigmatic and merciless vigilante known as the Dark Knight.",
      "release_date": "07-18-2008",
      "rating": 9.0,
      "age_rating": 13,
      "poster": "https://res.cloudinary.com/djhouzggx/image/upload/v1703170772/seacinema/me8pcxssz4djryq83fqt.jpg",
      "price": 160000
    },
    {
      "title": "Forrest Gump",
      "description": "Forrest Gump, a man with low intelligence, recounts his life's journey, showcasing his accidental experiences with some of the most influential people and defining historical events.",
      "release_date": "07-06-1994",
      "rating": 8.8,
      "age_rating": 12,
      "poster": "https://res.cloudinary.com/djhouzggx/image/upload/v1703170618/seacinema/vterb7g5wijclvwxqjbd.jpg",
      "price": 120000
    },
    {
      "title": "The Godfather",
      "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "release_date": "03-24-1972",
      "rating": 9.2,
      "age_rating": 18,
      "poster": "https://res.cloudinary.com/djhouzggx/image/upload/v1703170820/seacinema/dsqbubm6rrrq4zstldwe.jpg",
      "price": 170000
    },
    {
      "title": "The Matrix",
      "description": "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
      "release_date": "03-31-1999",
      "rating": 8.7,
      "age_rating": 15,
      "poster": "https://res.cloudinary.com/djhouzggx/image/upload/v1703170862/seacinema/vkgcnntre95fvde2blsb.jpg",
      "price": 135000
    },
    {
      "title": "Fight Club",
      "description": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      "release_date": "10-15-1999",
      "rating": 8.8,
      "age_rating": 18,
      "poster": "https://res.cloudinary.com/djhouzggx/image/upload/v1703170568/seacinema/rtpwfofnkti2ci4zzhrd.jpg",
      "price": 145000
    },
    {
      "title": "The Silence of the Lambs",
      "description": "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      "release_date": "02-14-1991",
      "rating": 8.6,
      "age_rating": 18,
      "poster": "https://res.cloudinary.com/djhouzggx/image/upload/v1703170924/seacinema/pcdnf8mzlttlbsmlmaar.jpg",
      "price": 125000
    },
    {
      "title": "Schindler's List",
      "description": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      "release_date": "12-15-1993",
      "rating": 8.9,
      "age_rating": 15,
      "poster": "https://res.cloudinary.com/djhouzggx/image/upload/v1703170720/seacinema/rfdlk7cyxxxmchn7kswt.jpg",
      "price": 155000
    }
  ]
}