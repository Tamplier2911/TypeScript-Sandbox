import "reflect-metadata";
import express, { RequestHandler } from "express";
import { MethodEnums } from "../enums/methodEnums";
import { MetadataKeysEnums } from "../enums/metadataKeysEnums";
import { NextFunction, Response, Request } from "express";
import { RouteHandlerDescriptor } from "../types/interfaces";

export class AppRouter {
  private static instance: express.Router;
  static getInstance(): express.Router {
    if (!AppRouter.instance) AppRouter.instance = express.Router();
    return AppRouter.instance;
  }
}

// export const router = express.Router();

function bodyValidators(keys: string[]): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) return res.status(422).send("Invalid Request.");

    for (let key of keys) {
      if (!req.body[key]) {
        return res.status(422).send("Invalid Request.");
      }
    }

    next();
  };
}

// Controller Decorator
export function Controller(routePrefix: string) {
  return function(target: Function) {
    // get router instance
    const router = AppRouter.getInstance();

    // loop over all methods in targets prototype object
    for (let key in target.prototype) {
      // get reference to current method we looking at
      const routHandler = target.prototype[key];

      // get metadata of 'path' tied to that method if there is any
      const path = Reflect.getMetadata(
        MetadataKeysEnums.path,
        target.prototype,
        key
      );

      // get metadata of 'method' tied to the method
      const method: MethodEnums = Reflect.getMetadata(
        MetadataKeysEnums.method,
        target.prototype,
        key
      );

      // get metadata of 'middleware' tied to the method if there is any
      const middlewares =
        Reflect.getMetadata(
          MetadataKeysEnums.middleware,
          target.prototype,
          key
        ) || [];

      const requiredBodyProps =
        Reflect.getMetadata(
          MetadataKeysEnums.validator,
          target.prototype,
          key
        ) || [];
      console.log(requiredBodyProps, "required body props");

      const validator = bodyValidators(requiredBodyProps);
      console.log(validator, "validator");

      if (path) {
        // router.route(`${routePrefix}${path}`).get(routHandler);
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routHandler
        );
      }
      // console.log(routHandler, "handler");
      // console.log(path, "path");
      // console.log(method, "method");
      // console.log(middlewares, "middlewares");
      // console.log(requiredBodyProps, "required body props");
    }
  };
}

// Route Binder | Method Decorator
function RouteBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      // add path field, with $path value
      // on targets - prototype of key, key - exact method that gets metadata
      Reflect.defineMetadata(MetadataKeysEnums.path, path, target, key);
      Reflect.defineMetadata(MetadataKeysEnums.method, method, target, key);
    };
  };
}

// Factory Decorators
export const Get = RouteBinder(MethodEnums.get);
export const Post = RouteBinder(MethodEnums.post);
export const Patch = RouteBinder(MethodEnums.patch);
export const Put = RouteBinder(MethodEnums.put);
export const Delete = RouteBinder(MethodEnums.delete);

// Middleware Decorator
export const Use = (middleware: RequestHandler) => {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeysEnums.middleware, target, key) || [];

    Reflect.defineMetadata(
      MetadataKeysEnums.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
};

// Body Validation Decorator
export function Validate(...keys: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeysEnums.validator, keys, target, key);
  };
}
