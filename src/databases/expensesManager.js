const dbmgr = require("./dbManager")
const db = dbmgr.db

const readMonthExpenses = async (month, year) => {
    try {
        const query = `SELECT * FROM expenses WHERE purchase_year = ? AND purchase_month = ? ORDER BY purchase_date ASC`
        const rowList = db.prepare(query).all(year, month)
        // const rowList = readQuery.all()
        return rowList
    } catch (err) {
        console.error(err)
        throw err
    }
}

const addExpense = async (year, month, day, cost, description) => {
    try{
        const query = `INSERT INTO expenses (purchase_year, purchase_month, purchase_date, cost, description)
        VALUES(?, ?, ?, ?, ?)`;
        db.prepare(query).run(year, month, day, cost, description)
    } catch (err) {
        console.error(err)
        throw err
    }
}


module.exports = {
    readMonthExpenses,
    addExpense
}