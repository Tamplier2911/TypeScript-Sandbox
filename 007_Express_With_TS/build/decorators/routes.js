"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var methodEnums_1 = require("../enums/methodEnums");
var metadataKeysEnums_1 = require("../enums/metadataKeysEnums");
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter.getInstance = function () {
        if (!AppRouter.instance)
            AppRouter.instance = express_1.default.Router();
        return AppRouter.instance;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
// export const router = express.Router();
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body)
            return res.status(422).send("Invalid Request.");
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                return res.status(422).send("Invalid Request.");
            }
        }
        next();
    };
}
// Controller Decorator
function Controller(routePrefix) {
    return function (target) {
        // get router instance
        var router = AppRouter.getInstance();
        // loop over all methods in targets prototype object
        for (var key in target.prototype) {
            // get reference to current method we looking at
            var routHandler = target.prototype[key];
            // get metadata of 'path' tied to that method if there is any
            var path = Reflect.getMetadata(metadataKeysEnums_1.MetadataKeysEnums.path, target.prototype, key);
            // get metadata of 'method' tied to the method
            var method = Reflect.getMetadata(metadataKeysEnums_1.MetadataKeysEnums.method, target.prototype, key);
            // get metadata of 'middleware' tied to the method if there is any
            var middlewares = Reflect.getMetadata(metadataKeysEnums_1.MetadataKeysEnums.middleware, target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata(metadataKeysEnums_1.MetadataKeysEnums.validator, target.prototype, key) || [];
            console.log(requiredBodyProps, "required body props");
            var validator = bodyValidators(requiredBodyProps);
            console.log(validator, "validator");
            if (path) {
                // router.route(`${routePrefix}${path}`).get(routHandler);
                router[method].apply(router, __spreadArrays(["" + routePrefix + path], middlewares, [validator,
                    routHandler]));
            }
            // console.log(routHandler, "handler");
            // console.log(path, "path");
            // console.log(method, "method");
            // console.log(middlewares, "middlewares");
            // console.log(requiredBodyProps, "required body props");
        }
    };
}
exports.Controller = Controller;
// Route Binder | Method Decorator
function RouteBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            // add path field, with $path value
            // on targets - prototype of key, key - exact method that gets metadata
            Reflect.defineMetadata(metadataKeysEnums_1.MetadataKeysEnums.path, path, target, key);
            Reflect.defineMetadata(metadataKeysEnums_1.MetadataKeysEnums.method, method, target, key);
        };
    };
}
// Factory Decorators
exports.Get = RouteBinder(methodEnums_1.MethodEnums.get);
exports.Post = RouteBinder(methodEnums_1.MethodEnums.post);
exports.Patch = RouteBinder(methodEnums_1.MethodEnums.patch);
exports.Put = RouteBinder(methodEnums_1.MethodEnums.put);
exports.Delete = RouteBinder(methodEnums_1.MethodEnums.delete);
// Middleware Decorator
exports.Use = function (middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(metadataKeysEnums_1.MetadataKeysEnums.middleware, target, key) || [];
        Reflect.defineMetadata(metadataKeysEnums_1.MetadataKeysEnums.middleware, __spreadArrays(middlewares, [middleware]), target, key);
    };
};
// Body Validation Decorator
function Validate() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(metadataKeysEnums_1.MetadataKeysEnums.validator, keys, target, key);
    };
}
exports.Validate = Validate;
