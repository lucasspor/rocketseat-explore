const express = require("express")

const migrationsRun = require("./database/sqlite/migrations")

migrationsRun()

const app = express()
app.use(express.json())

const port = 3333

app.listen( port, () => {console.log(`Server is running in Port ${3333}`)})