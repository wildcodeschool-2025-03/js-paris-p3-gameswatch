import type { RequestHandler } from "express";
import userRepository from "./userRepository";
import argon from "argon2";

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

export default { create, validate };
