import { Request, Response } from "express";
import { Users } from "../database/users";
import { Note } from "../models/note.model";
import { User } from "../models/user.model";
import { RequestError } from "../statusResponses/Error";
import { RequestSuccess } from "../statusResponses/Success";

export class NotesController {
  public addNote(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { detail, description } = req.body;
      const userExists = Users.findIndex((user) => user.id === id);
      if (userExists < 0) {
        return RequestError.notFound(res, "user");
      }
      const newNote = new Note(detail, description);

      Users[userExists].notes = [...Users[userExists].notes, newNote];
      return RequestSuccess.created(res, "note", newNote.toJson());
    } catch (error: any) {
      return RequestError.ClientError(res, error);
    }
  }

  public getNotes(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userExists = Users.find((user) => user.id === id);
      if (!userExists) {
        return RequestError.notFound(res, "user");
      }
      return RequestSuccess.ok(res, "notes ok", userExists.notes);
    } catch (error: any) {
      return RequestError.ClientError(res, error);
    }
  }
}
