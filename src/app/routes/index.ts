import express from 'express';

import login from './login';
import pet from './pet';
import user from './user';

export default (app : express.Application ) => {
  app.use(login);
  app.use(user);
  app.use('/users',pet);
}