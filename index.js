const express = require('express');
const loginRouter = require('./routes/login');
const db = require("./database/db")
const app = express();
app.set('view engine', 'ejs');

//Routes
app.use("/", loginRouter)


//PORT listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server have been started at: " + PORT))