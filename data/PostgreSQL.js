import {ConnectionsDB} from "../connectionsDB.js";
import {sleep} from "./helper.js";

export class PostgreSQL {

  constructor() {

  }

  async connect() {

    await sleep(3000);
    return new ConnectionsDB();
  }
}