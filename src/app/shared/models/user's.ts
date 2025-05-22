export interface Iusers {
  email: string;
  password: string;
  userRole: IuserRole;
}

export enum IuserRole {
  admin = 'admin',
  buyer = 'buyer',
  superAdmin = 'superAdmin',
}
