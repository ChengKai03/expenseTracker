const dbmgr = require("./dbManager")
const db = dbmgr.db


const getDescriptions = async () => {
   try {
        const query = `SELECT description AS title FROM descriptions`
        const fetchData = await db.prepare(query).all()
        return fetchData
    }
    catch (err){
        console.error(err)
        throw err
    }
}

const addDescription = async (newDescription) => {
    try{
        const query = `INSERT INTO descriptions (description) VALUES (?)`
        db.prepare(query).run(newDescription)
    }
    catch (err){
        console.error(err)
        throw err
    }
    
}

module.exports = {
    getDescriptions,
    addDescription
}