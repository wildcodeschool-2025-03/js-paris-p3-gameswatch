import argon from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import userRepository from "./userRepository";
import videoGameRepository from "../videoGameRepository";

const create: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body;
    user.password = await argon.hash(user.password);
    const affectedRows = await userRepository.add(user);
    if (affectedRows) res.sendStatus(201);
    else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const validate: RequestHandler = async (req, res, next) => {
  try {
    const { name, email, password, age, portable } = req.body;
    if (!name || name === "" || name.length < 4)
      res
        .status(422)
        .json("fisrtname doit etre définie et faire au moins 4 caractère");
    else next();
  } catch (error) {
    next(error);
  }
};

const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userRepository.readByEmail(email);
    if (!user)
      res
        .status(422)
        .json(
          "utilisateur non trouvé.",
        ); /*si ont trouve pas l'utilisateur en fonction de l'email ont renvoie une erreur*/
    else {
      const comfirmPassword = await argon.verify(
        user.password,
        password,
      ); /*sinon ont verifie que le mot de passe correspond a celui en base de donné*/
      if (!comfirmPassword) res.status(422).json("identifiant incorrect");
      else {
        const token = jwt.sign(
          { id: user.id },
          process.env.APP_SECRET as string,
        ); /*sinon renvoie a l'utilisateur le token générer */
        const { password, ...userWithoutPassword } = user;
        res.json({ userWithoutPassword, token });
      }
    }
  } catch (error) {
    next(error);
  }
};

const isAuth: RequestHandler = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) res.status(401).json("Authorization manquante.");
    else {
      const token = authorization.split(" ")[1];
      if (!token) res.status(401).json("token manquant.");
      else {
        const validToken = jwt.verify(token, process.env.APP_SECRET as string);
        req.body.user = validToken;
        next();
      }
    }
  } catch (error) {
    next(error);
  }
};

const browseOffersFavorites: RequestHandler = async (req, res, next) => {
  try {
    const idUser = Number(req.params.id);
    if (idUser !== req.body.user.id) {
      res.sendStatus(401);
    } else {
      const video_game = await videoGameRepository.readAllByUserId(idUser);
      res.json(video_game);
    }
  } catch (error) {
    next(error);
  }
};

export default { create, validate, login, isAuth, browseOffersFavorites };
