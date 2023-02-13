import { v4 as createUuid } from "uuid";

export class Note {
  private _id: string;
  constructor(private _detail: string, private _description: string) {
    this._id = createUuid();
  }

  public get id() {
    return this._id;
  }

  public get detail() {
    return this._detail;
  }

  public get description() {
    return this._description;
  }

  public set detail(detail: string) {
    this._detail = detail;
  }

  public set description(description: string) {
    this._description = description;
  }

  public toJson() {
    return {
      id: this._id,
      detail: this._detail,
      description: this._description,
    };
  }
}
