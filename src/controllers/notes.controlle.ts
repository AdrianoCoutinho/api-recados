import { Request, Response } from "express";
import { Users } from "../database/users";
import { Note } from "../models/note.model";
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
      return res.status(200).send({
        ok: true,
        message: "notes ok",
        notes: userExists.notes.map((note) => ({
          id: note.id,
          description: note.description,
          detail: note.detail,
        })),
      });
    } catch (error: any) {
      return RequestError.ClientError(res, error);
    }
  }

  public editNote(req: Request, res: Response) {
    try {
      const { id, noteid } = req.params;
      const { detail, description } = req.body;
      const userExists = Users.findIndex((user) => user.id === id);
      if (userExists < 0) {
        return RequestError.notFound(res, "user");
      }

      const noteExists = Users[userExists].notes.findIndex(
        (note) => note.id === noteid
      );
      if (noteExists < 0) {
        return RequestError.notFound(res, "note");
      }

      if (detail) {
        Users[userExists].notes[noteExists].detail = detail;
      }

      if (description) {
        Users[userExists].notes[noteExists].description = description;
      }

      const updatedNote = Users[userExists].notes[noteExists];

      return RequestSuccess.ok(
        res,
        "the note has been updated",
        updatedNote.toJson()
      );
    } catch (error: any) {
      return RequestError.ClientError(res, error);
    }
  }

  public deleteNote(req: Request, res: Response) {
    try {
      const { id, noteid } = req.params;
      const userExists = Users.findIndex((user) => user.id === id);
      if (userExists < 0) {
        return RequestError.notFound(res, "user");
      }
      const noteExists = Users[userExists].notes.findIndex(
        (note) => note.id === noteid
      );
      if (noteExists < 0) {
        return RequestError.notFound(res, "note");
      }
      const deletedNote = Users[userExists].notes.splice(noteExists, 1);
      return res.status(200).send({
        ok: true,
        message: "notes deleted",
        note: deletedNote[0].toJson(),
      });
    } catch (error: any) {
      return RequestError.ClientError(res, error);
    }
  }
}
