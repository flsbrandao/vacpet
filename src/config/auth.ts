import express, { NextFunction, Request, response, Response } from "express";
import session from "express-session";
import passport, { PassportStatic } from "passport";
import bcryptjs from "bcryptjs";
import passport_local, { Strategy } from "passport-local";
import { v4 } from "uuid";
import UsersModel from "../app/models/UsersModel";
import LoginRepository from "../app/repositories/LoginRepository";
import LoginModel from "../app/models/LoginModel";

const LocalStrategy = passport_local.Strategy;

export default (app: express.Application) => {
  let localStrategy = new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      const loginRepository = new LoginRepository();
      loginRepository
        .findForEmail(email)
        .then((response) => {

          if (!response) {
            return done(null, false);
          }

          if (bcryptjs.compareSync(password, response.password)) {
            return done(null, response);
          }
        })
        .catch((err) => {
          return done(null, false);
        });
    }
  );

  passport.use(localStrategy);

  //serealização
  passport.serializeUser(async (user: LoginModel, done) => {
    done(null, user);
  });

  passport.deserializeUser((userSession: LoginModel, done) => {
    done(null, userSession);
  });

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
