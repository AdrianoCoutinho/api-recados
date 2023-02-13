import { Router } from "express";
import { NotesController } from "../controllers/notes.controlle";
import { UsersController } from "../controllers/users.controller";
import { UserValidateMiddleware } from "../middlewares/user-validate.middleware";

export const userRoutes = () => {
  const app = Router();

  app.get("/", new UsersController().list);
  app.post("/:id/notes", new NotesController().addNote);
  app.get("/:id/notes", new NotesController().getNotes);
  app.post(
    "/",
    UserValidateMiddleware.ValidateRegister,
    new UsersController().create
  );

  return app;
};
