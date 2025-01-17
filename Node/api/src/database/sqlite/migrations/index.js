const sqliteConnections = require("../../sqlite")
const createUsers = require("./cresteUsers")

async function migrationsRun() {
  const schemas = [
    createUsers,
  ].join('')

  sqliteConnections().then(db => db.exec(schemas)).catch(error => console.error(error))
}

module.exports = migrationsRun