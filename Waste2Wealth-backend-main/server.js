const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const express = require("express");
const SendMail = require("./controller/sendMail");
const errorHandler = require("./middleWare/errorHandler");
const cors = require("cors");

const app = express();

// const corsOrigin = {
//   origin: "http://localhost:3000", //or whatever port your frontend is using
//   credentials: true,
//   optionSuccessStatus: 200,
// };

app.use(cors({origin:['http://localhost:3000','https://waste2wealth-umber.vercel.app', 'http://127.0.0.1:3000',"*"]}));

// app.use(cors({origin:"*"}));

// Use bodyparser for request
// use morgan for logging
// use authentication middleware for protected routes

connectDB();

const port = process.env.PORT || 5003;

app.use(express.json());
app.use("/api/user", require("./routes/userRouter"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Im inside  port at ${port}`);
});
console.log(port);
