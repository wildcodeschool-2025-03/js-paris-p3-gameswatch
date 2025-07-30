import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type VideoGame = {
  id: number;
  name: string;
  date: string;
  description: string;
  img: string;
  note: string;
  url: string;
};

/*rajouter mon crud*/

class videoGameRepository {
  async create(videoGame: Omit<VideoGame, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into video_game (name, date, description, img, note, url) values (?, ?, ?, ?, ?, ?)" /*!*/,
      [
        videoGame.name,
        videoGame.date,
        videoGame.description,
        videoGame.img,
        videoGame.note,
        videoGame.url,
      ],
    );
    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from video_game where id = ?",
      [id],
    );
    return rows[0] as VideoGame;
  }

  async readAll(search = "") {
    if (search) {
      const [rows] = await databaseClient.query<Rows>(
        "select * from video_game WHERE name like ?",
        [`%${search}%`],
      );
      return rows as VideoGame[];
    }
    const [rows] = await databaseClient.query<Rows>("select * from video_game");
    return rows as VideoGame[];
  }

  async readAllByUserId(idUser: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT video_game.* from video_game JOIN library ON library.video_game_id = video_game.id WHERE library.user_id = ?",
      [idUser],
    );

    return rows as VideoGame[];
  }
}

export default new videoGameRepository();
