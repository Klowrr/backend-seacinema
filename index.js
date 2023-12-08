const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");
const routes = require("./routes/index.js");

dotenv.config();

const app = express();

try {
    mongoose.connect(process.env.DATABASE_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("connected to db");
} catch (error) {
    handleError(error);
}
process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
});
  
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));

// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:3000'
// }));
app.use(express.json());
app.use(routes)


app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
});
