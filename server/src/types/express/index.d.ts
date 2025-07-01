// to make the file a module and avoid the TypeScript erro

declare global {
  namespace Express {
    export interface Request {
      /* ************************************************************************* */
      // Add your custom properties here, for example:
      //
      // user?: { ... }
      /* ************************************************************************* */
    }
  }
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
}
