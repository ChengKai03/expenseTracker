const Database = require("better-sqlite3")
const path = require("path")


const db = new Database("./src/databases/expenses.db")
db.pragma("journal_mode = WAL")

exports.db = db