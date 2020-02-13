"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn === true) {
        return next();
    }
    res.status(403);
    res.send("\n    <div style=\"max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh\">\n      <div style=\"font-size: 25px\">Not Permited</div>\n    </div>\n  ");
};
exports.getLogin = function (req, res, next) {
    res.send("\n  <div style=\"max-width: 1070px; margin: 0 auto\">\n    <form method=\"POST\" style=\"display: flex; flex-direction: column\">\n        <label for=\"name\">Name:</label>\n        <input type=\"text\" id=\"name\" name=\"name\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\"/>\n        <label for=\"email\">Email:</label>\n        <input type=\"email\" id=\"email\" name=\"email\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\"/>\n        <label for=\"password\">Password:</label>\n        <input type=\"password\" id=\"password\" name=\"password\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\"/>\n        <button type=\"submit\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\">Submit</button>\n    <form>\n  </div> \n");
};
exports.postLogin = function (req, res, next) {
    var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
    if (name &&
        email &&
        password &&
        req.session &&
        email === "123@123.com" &&
        password === "123") {
        req.session.loggedIn = true;
        req.session.name = name;
        req.session.email = email;
    }
    res.redirect("/");
    // next();
};
exports.getLogout = function (req, res, next) {
    if (req.session) {
        req.session = undefined;
        res.redirect("/");
    }
};
exports.getProtected = function (req, res, next) {
    res.send("\n    <div style=\"max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh\">\n      <div style=\"font-size: 25px\">You shall pass!</div>\n    </div>\n  ");
};
exports.getAllUsers = function (req, res, next) {
    res.send("\n    <div>/users route</div>\n");
};
exports.createNewUser = function (req, res, next) {
    res.send("\n      <div>/users route</div>\n  ");
};
exports.getOneUser = function (req, res, next) {
    res.send("\n        <div>/users/" + req.params.id + " route</div>\n    ");
};
exports.updateOneUser = function (req, res, next) {
    res.send("\n        <div>/users/" + req.params.id + " route</div>\n    ");
};
exports.deleteOneUser = function (req, res, next) {
    res.send("\n        <div>/users/" + req.params.id + " route</div>\n    ");
};
