"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../decorators/routes");
// import { get } from "http";
exports.testMiddleware = function (req, res, next) {
    console.log("Middleware Reached!");
    next();
};
var authController = /** @class */ (function () {
    function authController() {
    }
    authController.prototype.getLogin = function (req, res, next) {
        res.send("\n      <div style=\"max-width: 1070px; margin: 0 auto\">\n        <form method=\"POST\" style=\"display: flex; flex-direction: column\">\n            <label for=\"name\">Name:</label>\n            <input type=\"text\" id=\"name\" name=\"name\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\"/>\n            <label for=\"email\">Email:</label>\n            <input type=\"email\" id=\"email\" name=\"email\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\"/>\n            <label for=\"password\">Password:</label>\n            <input type=\"password\" id=\"password\" name=\"password\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\"/>\n            <button type=\"submit\" style=\"margin-bottom: 1rem; padding: .5rem .1rem;\">Submit</button>\n        <form>\n      </div> \n    ");
    };
    authController.prototype.postLogin = function (req, res, next) {
        var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
        if (req.session && email === "123@123.com" && password === "123") {
            req.session.loggedIn = true;
            req.session.name = name;
            req.session.email = email;
        }
        res.redirect("/");
    };
    authController.prototype.getLogout = function (req, res, next) {
        if (req.session) {
            req.session = undefined;
            res.redirect("/");
        }
    };
    __decorate([
        routes_1.Get("/login"),
        routes_1.Use(exports.testMiddleware),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], authController.prototype, "getLogin", null);
    __decorate([
        routes_1.Post("/login"),
        routes_1.Use(exports.testMiddleware),
        routes_1.Validate("name", "email", "password"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], authController.prototype, "postLogin", null);
    __decorate([
        routes_1.Get("/logout"),
        routes_1.Use(exports.testMiddleware),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], authController.prototype, "getLogout", null);
    authController = __decorate([
        routes_1.Controller("/auth")
    ], authController);
    return authController;
}());
/*

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send(`
    <div>/users route</div>
`);
};

export const createNewUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send(`
      <div>/users route</div>
  `);
};

export const getOneUser = (req: Request, res: Response, next: NextFunction) => {
  res.send(`
        <div>/users/${req.params.id} route</div>
    `);
};

export const updateOneUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send(`
        <div>/users/${req.params.id} route</div>
    `);
};

export const deleteOneUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send(`
        <div>/users/${req.params.id} route</div>
    `);
};

*/
