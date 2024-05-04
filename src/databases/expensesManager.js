const dbmgr = require("./dbManager")
const db = dbmgr.db

const readAllExpenses = () => {
    try {
        const query = `SELECT * FROM expenses`
        const readQuery = db.prepare(query)
        const rowList = readQuery.all()
        return rowList
    } catch (err) {
        console.error(err)
        throw err
    }
}


module.exports = {
    readAllExpenses
}