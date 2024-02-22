import { Express, Request, Response } from "express";
import {
  createUserHandler,
  getUserByIdHandler,
  loginUserHandler,
} from "./controller/user.controller";
import {
  createUserSchema,
  getUserByIdSchema,
  loginUserSchema,
} from "./schema/user.schema";
import validateResource from "./middleware/validateResource";
import requireUser from "./middleware/requireUser";

export default function routes(app: Express) {
  app.get("/healthcheck", (_req: Request, res: Response) =>
    res.sendStatus(200)
  );

  app.post(
    "/api/users/register",
    validateResource(createUserSchema),
    createUserHandler
  );

  app.post(
    "/api/users/login",
    validateResource(loginUserSchema),
    loginUserHandler
  );

  app.get(
    "/api/users/:user_id",
    validateResource(getUserByIdSchema),
    getUserByIdHandler
  );

  app.get(
    "/api/test-auth", 
    requireUser, 
    (_req: Request, res: Response) => res.sendStatus(200)
  );
}
