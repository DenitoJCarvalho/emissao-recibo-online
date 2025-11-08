import { Request } from 'express';

export interface IAuth {
  getProfile(req: Request): any;
}
