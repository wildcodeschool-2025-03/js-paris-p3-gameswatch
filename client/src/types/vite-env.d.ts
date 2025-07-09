/// <reference types="vite/client" />
// This provides types for the Vite-injected env variables on import.meta.env
// See https://vite.dev/guide/features.html#client-types

export interface VideoGame {
  id: number;
  name: string;
  date: string;
  description: string;
  img: string;
  note: string;
  url: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: string;
  portable: string;
  description: string;
  img: string;
  game_of_heart: string;
  time: string;
  best_friend: string;
  last_game: string;
  token: string;
}
