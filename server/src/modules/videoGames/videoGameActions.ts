import type { RequestHandler } from "express";

import videoGameRepository from "./videoGameRepository";

const test: RequestHandler = async (req, res, next) => {
  try {
    console.info("coucou");
  } catch (err) {
    next(err);
  }
};

export default { test };
