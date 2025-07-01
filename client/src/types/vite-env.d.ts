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
