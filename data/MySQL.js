import ConnectionsDB from "../connectionsDB.js";
import {random, sleep} from "./helper.js";

class MySQL {
    constructor() {
        this.name =  'MySQL';
        return this.connect();
    }

    async connect() {
        await sleep(random(1000,3000));
        console.log('Successful ' + this.name + ' is connected'+ ' is connected'
            + ' Time: ' + Date.now());
        return new ConnectionsDB(this.name);
    }
}

export default MySQL;