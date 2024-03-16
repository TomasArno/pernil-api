import { NextFunction, Request, Router } from "express";

import jwt from "jsonwebtoken";

import UsersService from "../services/users";

export default class CustomRouter {
  private _router: any;

  constructor() {
    this._router = Router();
    this.init();
  }

  getRouter() {
    return this._router;
  }

  init() {}

  applyCbs(cbs: [() => {}]) {
    return cbs.map((each) => async (...params: any) => {
      try {
        await each.apply(this, params);
      } catch (error) {
        params[1].json({
          statusCode: 500,
          message: error.message,
        });
      }
    });
  }

  responses = (_req, res, next) => {
    res.success200 = (payload) =>
      res.json({ statusCode: 200, response: payload });
    res.success201 = (payload) =>
      res.json({ statusCode: 201, response: payload });
    res.error400 = (message) => res.json({ statusCode: 400, message });
    res.error401 = () => res.json({ statusCode: 401, message: "Bad auth" });
    res.error403 = () => res.json({ statusCode: 403, message: "Forbidden" });
    res.error404 = () => res.json({ statusCode: 404, message: "Not found" });

    next();
  };

  policies =
    (arrayOfPolicies: string[]) => async (req, res, next: NextFunction) => {
      try {
        if (arrayOfPolicies.includes("PUBLIC")) return next();

        let token = req.cookies["token"];
        if (!token) return res.error401();

        const data = jwt.verify(token, process.env.SECRET) as { email; role };
        if (!data) return res.error400("Bad auth by token");

        const { email, role } = data;

        const user = await UsersService.getByEmail(email);

        const roles = {
          0: "USER",
          1: "ADMIN",
        };

        if (
          (role === 0 && arrayOfPolicies.includes("USER")) ||
          (role === 1 && arrayOfPolicies.includes("ADMIN"))
        ) {
          req.user = user;
          next();
        } else {
          res.error403();
        }
      } catch (error) {
        return next(error);
      }
    };

  create(path: string, policies: string[], ...cbs: [() => {}]) {
    this._router.post(
      path,
      this.responses,
      this.policies(policies),
      this.applyCbs(cbs)
    );
  }
  read(path: string, policies: string[], ...cbs: [() => {}]) {
    this._router.get(
      path,
      this.responses,
      this.policies(policies),
      this.applyCbs(cbs)
    );
  }
  update(path: string, policies: string[], ...cbs: [() => {}]) {
    this._router.put(
      path,
      this.responses,
      this.policies(policies),
      this.applyCbs(cbs)
    );
  }
  destroy(path: string, policies: string[], ...cbs: [() => {}]) {
    this._router.delete(
      path,
      this.responses,
      this.policies(policies),
      this.applyCbs(cbs)
    );
  }
  use(path: string, ...cbs: [() => {}]) {
    this._router.use(path, this.responses, this.applyCbs(cbs));
  }
}
