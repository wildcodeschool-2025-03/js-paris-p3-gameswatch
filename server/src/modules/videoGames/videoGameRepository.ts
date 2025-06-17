import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

class videoGameRepository {}

type Item = {
  id: number;
  title: string;
  user_id: number;
};

export default new videoGameRepository();
