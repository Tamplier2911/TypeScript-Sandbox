"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// const bodyParser = require("body-parser");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
// temp
// import "./controllers/userController";
var routes_1 = require("./decorators/routes");
var dotenv = require("dotenv");
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
// routes
var userRouter = require("./routes/userRoutes");
var app = express_1.default();
if (process.env.NODE_ENV === "development")
    app.use(morgan("dev"));
app.use(morgan("dev"));
// parsing json
app.use(express_1.default.json({ limit: "10kb" }));
// parsing form
app.use(express_1.default.urlencoded({ extended: true, limit: "10kb" }));
// app.use(bodyParser.urlencoded({ extended: true }));
// cookie session
app.use(cookie_session_1.default({
    name: "session",
    keys: ["3kf1-7kna-slx0-0pvz-alxp"],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
// parsing body as json
app.use(body_parser_1.default.json());
// parsing cookies
app.use(cookieParser());
app.use(function (req, res, next) {
    //   req.requestTime = new Date().toISOString();
    // if (process.env.NODE_ENV === "development") {
    console.log(req.cookies);
    // }
    next();
});
// ROUTES
app.get("/", function (req, res, next) {
    var url = req.protocol + "://" + req.get("host") + req.originalUrl;
    if (req.session && req.session.loggedIn === true) {
        var _a = req.session, name_1 = _a.name, email = _a.email;
        res.send("\n        <div style=\"max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh\">\n            <div style=\"font-size: 25px; margin-bottom: 10px\">Logged In successfuly!</div>\n            <div style=\"font-size: 20px\">Name: " + name_1 + "</div>    \n            <div style=\"font-size: 20px\">Email: " + email + "</div>\n            <a href=\"" + (url +
            "users/logout") + "\" style=\"font-size: 20px; text-decoration: none; color: #333\">Log Out</a>\n        </div>\n    ");
    }
    else {
        res.send("\n        <div style=\"max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh\">\n            <div style=\"font-size: 25px\">You have to log in to view this route!</div>\n            <a href=\"" + (url +
            "users/login") + "\" style=\"font-size: 20px; text-decoration: none; color: #333\">Log In</a>\n        </div>\n      ");
    }
});
app.use("/users", userRouter);
app.use(routes_1.AppRouter.getInstance());
// uncaught exceptions
process.on("uncaughtException", function (err) {
    console.log("UNCAUGHT EXCEPTION", err.name, err.message);
    process.exit(1);
});
// SERVER
var port = process.env.PORT || 5000;
dotenv.config({ path: "../config.env" });
var server = app.listen(port, function () {
    console.log("App is running on http://localhost:" + port + "/ ...");
});
// unhandled rejections
process.on("unhandledRejection", function (err) {
    console.log("UNDANDLED REJECTION", err);
    server.close(function () {
        process.exit(1);
    });
});
module.exports = app;
// export default app;
