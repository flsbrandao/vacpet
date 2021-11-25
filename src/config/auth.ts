import express from "express";
import session from "express-session";
import passport from "passport";

import { Strategy } from "passport-local";
import { v4 } from "uuid";
import UsersModel from "../app/models/UsersModel";

export default (app: express.Application) => {
  let localStategy = new Strategy(
    {
      usernameField: "email",
      passwordField: "senha",
    },
    (email, senha, done) => {}
  );

  passport.use(localStategy);

  //serealização
  passport.serializeUser(async (user: UsersModel, done) => {});

  passport.deserializeUser((userSession: UsersModel, done) => {});

  app.use(
    session({
      secret: "DarthVaderBoladao",
      genid: (req) => {
        return v4();
      },
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};
