import {sleep} from "./data/helper.js";

export class ConnectionsDB {

  constructor() {

  }

  async getRow(index) {
    await sleep(1000);
    return index;
  }
}