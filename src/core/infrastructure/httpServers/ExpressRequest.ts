import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

export interface ExpressRequestBody<T> extends Request {
  body: T
}

export interface ExpressRequestParams<T extends ParamsDictionary> extends Request {
  params: T
}

export interface ExpressRequestParamsBody<P extends ParamsDictionary, B> extends Request {
  params: P,
  body: B
}
