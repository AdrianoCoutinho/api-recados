import { Request, Response } from "express";
import { Users } from "../database/users";
import { User } from "../models/user.model";
import { RequestError } from "../statusResponses/Error";
import { RequestSuccess } from "../statusResponses/Success";

export class UsersController {
  public list(req: Request, res: Response) {
    try {
      const usersData = [...Users];
      return res.status(200).send({
        ok: "true",
        message: "users listed",
        data: usersData,
      });
    } catch (error: any) {
      return RequestError.ClientError(res, error);
    }
  }

  public create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const user = new User(name, email, password);
      Users.push(user);

      return RequestSuccess.created(res, "user", user.toJson());
    } catch (error: any) {
      return RequestError.ClientError(res, error);
    }
  }

  public login(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const usersData = [...Users];
      const user = usersData.find((user) => user.email === email);

      return RequestSuccess.ok(res, "Login successfully done", {
        id: user?.id,
      });
    } catch (error: any) {
      return RequestError.ClientError(res, error);
    }
  }

  public getByEmail(email: string) {
    const usersData = [...Users];
    const emailExists = usersData.find((user) => user.email === email);
    return emailExists;
  }

  // public addNote(req: Request, res: Response) {
  //   try {
  //     const { id } = req.params;
  //     const { detail, description } = req.body;
  //     const userExists = Users.findIndex((user) => user.id === id);
  //     if (userExists < 0) {
  //       return RequestError.notFound(res, "user");
  //     }
  //     const newNote = {
  //       detail,
  //       description
  //     }
  //     Users[userExists].notes = []
  //     return RequestSuccess.created(res, "note", newNote);
  //   } catch (error: any) {
  //     return RequestError.ClientError(res, error);
  //   }
  // }

  // public getNotes(req: Request, res: Response) {
  //   try {
  //     const { id } = req.params;
  //     const userExists = Users.find((user) => user.id === id);
  //     if (!userExists) {
  //       return RequestError.notFound(res, "user");
  //     }
  //     return RequestSuccess.ok(res, "notes ok", userExists.notes);
  //   } catch (error: any) {
  //     return RequestError.ClientError(res, error);
  //   }
  // }
}
