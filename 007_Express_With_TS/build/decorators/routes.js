"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
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
function Controller(routePrefix) {
    return function (target) {
        // get router instance
        var router = AppRouter.getInstance();
        // loop over all methods in targets prototype object
        for (var key in target.prototype) {
            // get reference to current method we looking at
            var routHandler = target.prototype[key];
            // get metadata of 'path' tied to that method if there is any
            var path = Reflect.getMetadata("path", target.prototype, key);
            if (path) {
                router.route("" + routePrefix + path).get(routHandler);
            }
            //   console.log(path);
            //   console.log(routHandler);
        }
    };
}
exports.Controller = Controller;
// Route Binder
function RouteBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            // add path field, with $path value
            // on targets - prototype of key, key - exact method that gets metadata
            Reflect.defineMetadata("path", path, target, key);
            Reflect.defineMetadata("method", method, target, key);
        };
    };
}
// Factory Decorators
exports.Get = RouteBinder("get");
exports.Post = RouteBinder("post");
exports.Patch = RouteBinder("patch");
exports.Put = RouteBinder("put");
exports.Delete = RouteBinder("delete");
