import { Request, Response, NextFunction } from "express";
import { RequestWithBody } from "../types/interfaces";
import { Get, Controller, Use, Validate, Post } from "../decorators/routes";
// import { get } from "http";

export const testMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Middleware Reached!");
  next();
};

@Controller("/auth")
class authController {
  @Get("/login")
  @Use(testMiddleware)
  getLogin(req: Request, res: Response, next: NextFunction): void {
    res.send(`
      <div style="max-width: 1070px; margin: 0 auto">
        <form method="POST" style="display: flex; flex-direction: column">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" style="margin-bottom: 1rem; padding: .5rem .1rem;"/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" style="margin-bottom: 1rem; padding: .5rem .1rem;"/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" style="margin-bottom: 1rem; padding: .5rem .1rem;"/>
            <button type="submit" style="margin-bottom: 1rem; padding: .5rem .1rem;">Submit</button>
        <form>
      </div> 
    `);
  }

  @Post("/login")
  @Use(testMiddleware)
  @Validate("name", "email", "password")
  postLogin(req: RequestWithBody, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;
    if (req.session && email === `123@123.com` && password === "123") {
      req.session.loggedIn = true;
      req.session.name = name;
      req.session.email = email;
    }
    res.redirect("/");
  }

  @Get("/logout")
  @Use(testMiddleware)
  getLogout(req: Request, res: Response, next: NextFunction) {
    if (req.session) {
      req.session = undefined;
      res.redirect("/");
    }
  }
}

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
