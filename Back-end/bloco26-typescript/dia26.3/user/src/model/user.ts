import { Pool } from 'mysql2/promise';

export type user = {
  nome: string;
  email: string;
  senha: string;
};

interface IUser {
  findAll: () => user[];
  findOne: () => user;
  update: () => user;
  create: () => user;
  destroy: () => void;
};

export class User implements IUser {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  };

  findAll = async () => await this.connection.execute();
}
