import express from 'express';
import login from './login';
import pet from './pet';

export default (app : express.Application ) => {
  app.use(login);
  app.use(pet);
}