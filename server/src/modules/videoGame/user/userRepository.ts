import databaseClient from "../../../../database/client";
import type { Result, Rows } from "../../../../database/client";
import type { User } from "../../../types/express";

const add = async (user: Partial<User>) => {
  const { name, email, password, age, portable } = user;
  const [result] = await databaseClient.query<Result>(
    "INSERT INTO user (name, email, password, age, portable ) VALUES (?, ?, ?, ?, ?)",
    [name, email, password, age, portable],
  );

  return result.affectedRows;
};

const readByEmail = async (email: string) => {
  const [rows] = await databaseClient.query<Rows>(
    "SELECT * FROM user WHERE email = ?",
    [email],
  );

  return rows[0] as User;
};

export default { add, readByEmail };
