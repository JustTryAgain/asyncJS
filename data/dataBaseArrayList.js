import MongoDB from "./MongoDB.js";
import PostgreSQL from "./PostgreSQL.js";
import MySQL from "./MySQL.js";

const dbArr = await Promise.all(
    [new MongoDB(), new PostgreSQL(), new MySQL()]
);

export default dbArr;
