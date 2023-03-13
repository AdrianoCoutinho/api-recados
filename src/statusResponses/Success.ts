import { Response } from "express";

export class RequestSuccess {
  public static ok(res: Response, message: string, data: any) {
    return res.status(200).send({
      ok: true,
      message,
      data,
    });
  }

  public static created(res: Response, message: string, data: any) {
    return res.status(201).send({
      ok: true,
      message: `${message} foi criado`,
      data,
    });
  }
}
