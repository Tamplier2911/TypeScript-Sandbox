// const express = require("express");
// const bodyParser = require("body-parser");
import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

// app router and controllers
import { AppRouter } from "./decorators/routes";
import "./controllers/userController";
import "./controllers/rootController";

const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// routes
// const userRouter = require("./routes/userRoutes");

const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(morgan("dev"));

// parsing json
app.use(express.json({ limit: "10kb" }));

// parsing form
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// app.use(bodyParser.urlencoded({ extended: true }));

// cookie session
app.use(
  cookieSession({
    name: "session",
    keys: ["3kf1-7kna-slx0-0pvz-alxp"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

// parsing body as json
app.use(bodyParser.json());

// parsing cookies
app.use(cookieParser());

app.use((req, res, next) => {
  //   req.requestTime = new Date().toISOString();
  // if (process.env.NODE_ENV === "development") {
  console.log(req.cookies);
  // }
  next();
});

// ROUTER
app.use(AppRouter.getInstance());

// uncaught exceptions
process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION", err.name, err.message);
  process.exit(1);
});

// SERVER
const port = process.env.PORT || 5000;
dotenv.config({ path: "../config.env" });
const server = app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}/ ...`);
});

// unhandled rejections
process.on("unhandledRejection", err => {
  console.log("UNDANDLED REJECTION", err);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;

// export default app;
