import type { RequestHandler } from "express";

import videoGameRepository from "../videoGame/videoGameRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const search = req.query.search as string;
    if (search) {
      const videoGames = await videoGameRepository.readAll(search);
      res.json(videoGames);
    } else {
      const videoGames = await videoGameRepository.readAll();
      res.json(videoGames);
    }
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    console.info(req.params);
    const videoGameId = Number(req.params.id);
    const videoGame = await videoGameRepository.read(videoGameId);

    if (videoGame == null) {
      res.sendStatus(404);
    } else {
      res.json(videoGame);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newVideoGame = {
      id: req.body.id,
      name: req.body.name,
      date: req.body.date,
      description: req.body.description,
      img: req.body.img,
      note: req.body.note,
      url: req.body.url,
    };

    const insertId = await videoGameRepository.create(newVideoGame);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add };
