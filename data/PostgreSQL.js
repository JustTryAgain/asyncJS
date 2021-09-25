import ConnectionsDB from "../connectionsDB.js";
import {random, sleep} from "./helper.js";

export class PostgreSQL {
    constructor() {
        this.name = 'PostgreSQL';
        return this.connect();
    }

    async connect() {
        await sleep(random(1000,3000));
        console.log('Successful ' + this.name + ' is connected'
            + ' Time: ' + Date.now());
        return new ConnectionsDB(this.name);
    }
}

export default PostgreSQL;