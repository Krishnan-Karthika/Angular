import { IPostOffice } from "./IPostoffice";

export interface IRoot {
  Message: string;
  Status: string;
  PostOffice: IPostOffice[];
}
