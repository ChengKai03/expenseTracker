const dbmgr = require("./dbManager")
const db = dbmgr.db

const readMonthExpenses = (month, year) => {
    try {
        const query = `SELECT * FROM expenses WHERE purchase_year = ? AND purchase_month = ?`
        const rowList = db.prepare(query).all(year, month)
        // const rowList = readQuery.all()
        return rowList
    } catch (err) {
        console.error(err)
        throw err
    }
}


module.exports = {
    readMonthExpenses
}