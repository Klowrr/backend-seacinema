import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import MoviesRoute from "./routes/MoviesRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import ShowTimesRoute from './routes/ShowTimeRoute.js'
import TransactionRoute from './routes/TransactionRoute.js'
import MovieSeeder from "./models/seeder/MovieSeeder.js";
import ShowTimeSeeder from "./models/seeder/ShowTimeSeeder.js";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

//vvv Uncoment Code Bellow step by step vvv

// 1. Create Table

// (async()=>{
//     await db.sync();
// })();

// 2. Movies Seeder

// MovieSeeder()

// 3. Showtimes Seeder

// ShowTimeSeeder()


app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(ShowTimesRoute);
app.use(UserRoute);
app.use(MoviesRoute);
app.use(TransactionRoute)
app.use(AuthRoute);

store.sync();

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
});
