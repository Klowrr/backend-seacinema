const MoviesRouter = require("./movieRouter.js");
const UsersRouter = require("./userRouter.js");
const ShowtimesRouter = require("./showtimeRouter.js")
const TransactionsRouter = require("./transactionRouter.js")
const TicketsRouter = require("./ticketRouter.js")
const routes = [
    MoviesRouter,
    UsersRouter,
    ShowtimesRouter,
    TransactionsRouter,
    TicketsRouter
];
module.exports = routes;
