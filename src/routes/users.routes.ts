import { Router } from "express";
import { NotesController } from "../controllers/notes.controlle";
import { UsersController } from "../controllers/users.controller";
import { UserValidateMiddleware } from "../middlewares/user-validate.middleware";

export const userRoutes = () => {
  const app = Router();
  app.post(
    "/",
    UserValidateMiddleware.ValidateRegister,
    new UsersController().create
  );
  app.post(
    "/login",
    UserValidateMiddleware.ValidateLogin,
    new UsersController().login
  );

  app.get("/:id/notes", new NotesController().getNotes);

  app.get("/", new UsersController().list);
  app.post("/:id/notes", new NotesController().addNote);

  return app;
};
