import "reflect-metadata";
import express from "express";

export class AppRouter {
  private static instance: express.Router;
  static getInstance(): express.Router {
    if (!AppRouter.instance) AppRouter.instance = express.Router();
    return AppRouter.instance;
  }
}

// export const router = express.Router();

export function Controller(routePrefix: string) {
  return function(target: Function) {
    // get router instance
    const router = AppRouter.getInstance();

    // loop over all methods in targets prototype object
    for (let key in target.prototype) {
      // get reference to current method we looking at
      const routHandler = target.prototype[key];
      // get metadata of 'path' tied to that method if there is any
      const path = Reflect.getMetadata("path", target.prototype, key);
      if (path) {
        router.route(`${routePrefix}${path}`).get(routHandler);
      }
      //   console.log(path);
      //   console.log(routHandler);
    }
  };
}

// Route Binder
function RouteBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      // add path field, with $path value
      // on targets - prototype of key, key - exact method that gets metadata
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", method, target, key);
    };
  };
}

// Factory Decorators
export const Get = RouteBinder("get");
export const Post = RouteBinder("post");
export const Patch = RouteBinder("patch");
export const Put = RouteBinder("put");
export const Delete = RouteBinder("delete");
