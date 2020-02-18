import { Controller, Get, Use } from "../decorators/routes";
import { Request, Response, NextFunction } from "express";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session && req.session.loggedIn === true) {
    return next();
  }
  res.status(403);
  res.send(`
      <div style="max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh">
        <div style="font-size: 25px">Not Permited</div>
      </div>
    `);
};

@Controller("")
class RootController {
  @Get("/")
  getRoot(req: Request, res: Response, next: NextFunction) {
    const url = req.protocol + "://" + req.get("host") + req.originalUrl;

    if (req.session && req.session.loggedIn === true) {
      const { name, email } = req.session;
      res.send(`
              <div style="max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh">
                  <div style="font-size: 25px; margin-bottom: 10px">Logged In successfuly!</div>
                  <div style="font-size: 20px">Name: ${name}</div>    
                  <div style="font-size: 20px">Email: ${email}</div>
                  <a href="${url +
                    "auth/logout"}" style="font-size: 20px; text-decoration: none; color: #333">Log Out</a>
              </div>
          `);
    } else {
      res.send(`
              <div style="max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh">
                  <div style="font-size: 25px">You have to log in to view this route!</div>
                  <a href="${url +
                    "auth/login"}" style="font-size: 20px; text-decoration: none; color: #333">Log In</a>
              </div>
        `);
    }
  }

  @Get("/protected")
  @Use(requireAuth)
  getProtected(req: Request, res: Response, next: NextFunction) {
    res.send(`
      <div style="max-width: 1070px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh">
        <div style="font-size: 25px">You shall pass!</div>
      </div>
    `);
  }
}
