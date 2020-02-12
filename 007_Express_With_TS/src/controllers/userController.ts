import { Request, Response, NextFunction } from "express";
import { RequestWithBody } from "../types/interfaces";

export const getLogin = (req: Request, res: Response, next: NextFunction) => {
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
};

export const postLogin = (
  req: RequestWithBody,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  //   console.log(req.session);
  if (
    name &&
    email &&
    password &&
    req.session &&
    email === `123@123.com` &&
    password === "123"
  ) {
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
