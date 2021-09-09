//Create 3 classes of DataBases and DB_connection
//Create method asyncConnect in each class which return new DB_connection
//create Db_connection method async getRow
//Create function sleep for example of async work
//Start 3 connection from 3 Data Bases asynchronously
import {MongoDB} from "./data/MongoDB.js";
import {PostgreSQL} from "./data/PostgreSQL.js";
import {MySQL} from "./data/MySQL.js";

let mongo = new MongoDB();
let postgresql = new PostgreSQL();
let mysql = new MySQL();
let connectionMongo = mongo.connect().then(() => {
  console.log('MongoDB success connected!');
});

let connectionPostgreSQL = await postgresql.connect();




let connectionMYSQL = mysql.connect().then(() => {
  console.log('MySQL success connected!');
});

connectionPostgreSQL.getRow(25).then((row) => {
  console.log(row)
});



