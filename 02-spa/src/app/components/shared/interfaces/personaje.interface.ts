import { StringLiteralLike } from "typescript";

export interface Personaje{
  id: number;
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
  tipo: string;
}