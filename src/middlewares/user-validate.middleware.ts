import { NextFunction, Request, Response } from "express";
import { UsersController } from "../controllers/users.controller";
import { RequestError } from "../statusResponses/Error";

export class UserValidateMiddleware {
  public static ValidateRegister(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { name, email, password, repassword } = req.body;
      const emailExists = new UsersController().getByEmail(email);
      if (!name) {
        return RequestError.fieldNotProvided(res, "name");
      }

      if (!email) {
        return RequestError.fieldNotProvided(res, "email");
      }
      if (!password) {
        return RequestError.fieldNotProvided(res, "password");
      }

      if (!repassword) {
        return RequestError.fieldNotProvided(res, "repassword");
      }

      if (repassword != password) {
        return RequestError.genericError(res, "passwords do not match");
      }

      if (emailExists) {
        return RequestError.genericError(
          res,
          "there is already a user with this email"
        );
      }

      next();
    } catch (error: any) {
      return RequestError.ClientError(res, error);
    }
  }
}
