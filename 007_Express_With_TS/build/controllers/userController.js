"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogin = function (req, res, next) {
    res.send("\n  <div style=\"max-width: 1070px; margin: 0 auto\">\n    <form method=\"POST\" style=\"display: flex; flex-direction: column\">\n        <label for=\"name\">Name:</label>\n        <input type=\"text\" id=\"name\" name=\"name\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\"/>\n        <label for=\"email\">Email:</label>\n        <input type=\"email\" id=\"email\" name=\"email\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\"/>\n        <label for=\"password\">Password:</label>\n        <input type=\"password\" id=\"password\" name=\"password\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\"/>\n        <button type=\"submit\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\">Submit</button>\n    <form>\n  </div> \n");
};
exports.postLogin = function (req, res, next) {
    var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
    //   console.log(req.session);
    if (name &&
        email &&
        password &&
        req.session &&
        email === "123@123.com" &&
        password === "123") {
        req.session.loggedIn = true;
        res.redirect("/");
        /*
        res.send(`
            <div style="max-width: 1070px; margin: 0 auto">
                <div>Logged In successfuly!</div>
                <div>Name: ${name}</div>
                <div>Email: ${email}</div>
                <div>Password: ${password}</div>
            </div>
        `);
        */
    }
    next();
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
