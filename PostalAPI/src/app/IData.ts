export interface IData {
  Message: string;
  Status: string;
  PostOffice: IPostOffice[];
}

export interface IPostOffice {
  PostOffice: string;
  PostOfficeType:string;
  Taluk:string;
  District:string;
  State:string;
  Division:string;
  DeliveryStatus:string;
  PinCode:string;
  Address:string;

}

