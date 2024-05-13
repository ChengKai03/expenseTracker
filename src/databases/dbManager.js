const Database = require("better-sqlite3")
const isDev = require("is-dev")
const path = require("path")

const dbPath =
    isDev
        ? "./expenses.db"
        : path.join(process.resourcesPath, "./expenses.db")

        

const db = new Database(dbPath)
db.pragma("journal_mode = WAL")

exports.db = db