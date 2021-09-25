import {random} from "./data/helper.js";
import dbArr from "./data/dataBaseArrayList.js";

const someDbQuery = async (numOfReqs)=> {
    for (let i = 0; i < numOfReqs; i++) {
        const requestArr = await Promise.all(
                dbArr.map(db => db.getRow(random(0, 100), random(500,3000)))
        );
        requestArr.forEach(rq => console.log(rq));
    }
    return Promise.resolve('Request completed!');
}

someDbQuery(10).then(console.log);