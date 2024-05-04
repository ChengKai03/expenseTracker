const Database = require("better-sqlite3")
const path = require("path")

// const dbPath =
//     process.env.NODE_ENV === "development"
//         ? "./expenses.db"
//         : path.join(process.resourcesPath, "./expenses.db")

        

const db = new Database("./expenses.db")
db.pragma("journal_mode = WAL")

exports.db = db