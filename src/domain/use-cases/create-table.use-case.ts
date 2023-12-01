import { CreateContextOptions } from "vm";

export interface CreateTableUseCase {
  execute: (option: Options) => string;
}

export interface Options {
  base: number;
  limit: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: Options) {
    let outputMessage = "";
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }
    return outputMessage;
  }
}
