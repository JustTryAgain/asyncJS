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
/*

const fuckMe = new ConnectionsDB('MySQL');
for (let i = 0; i < 10; i++) {
  console.log(await fuckMe.getRow(10,2000));
}
*/


export default ConnectionsDB;