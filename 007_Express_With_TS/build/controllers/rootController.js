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
exports.requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn === true) {
        return next();
    }
    res.status(403);
    res.send("\n      <div style=\"max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh\">\n        <div style=\"font-size: 25px\">Not Permited</div>\n      </div>\n    ");
};
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res, next) {
        var url = req.protocol + "://" + req.get("host") + req.originalUrl;
        if (req.session && req.session.loggedIn === true) {
            var _a = req.session, name_1 = _a.name, email = _a.email;
            res.send("\n              <div style=\"max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh\">\n                  <div style=\"font-size: 25px; margin-bottom: 10px\">Logged In successfuly!</div>\n                  <div style=\"font-size: 20px\">Name: " + name_1 + "</div>    \n                  <div style=\"font-size: 20px\">Email: " + email + "</div>\n                  <a href=\"" + (url +
                "auth/logout") + "\" style=\"font-size: 20px; text-decoration: none; color: #333\">Log Out</a>\n              </div>\n          ");
        }
        else {
            res.send("\n              <div style=\"max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh\">\n                  <div style=\"font-size: 25px\">You have to log in to view this route!</div>\n                  <a href=\"" + (url +
                "auth/login") + "\" style=\"font-size: 20px; text-decoration: none; color: #333\">Log In</a>\n              </div>\n        ");
        }
    };
    RootController.prototype.getProtected = function (req, res, next) {
        res.send("\n      <div style=\"max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh\">\n        <div style=\"font-size: 25px\">You shall pass!</div>\n      </div>\n    ");
    };
    __decorate([
        routes_1.Get("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        routes_1.Get("/protected"),
        routes_1.Use(exports.requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        routes_1.Controller("")
    ], RootController);
    return RootController;
}());
