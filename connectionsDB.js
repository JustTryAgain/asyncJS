import {sleep} from "./data/helper.js";

class ConnectionsDB {

  constructor(nameDb) {
    this.nameDb = nameDb;
  }

  async getRow(index, timeOut) {
    const date = Date.now();
    const response = 'UNIX time: ' + date + ' response: '
        + this.nameDb + ' value: ' + index;
    await sleep(timeOut);
    return response;
  }
}

export default ConnectionsDB;