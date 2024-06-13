const { Pool } = require('pg')

const dbPool = new Pool({
	user: 'postgres',
	database: 'company',
	password: 'qwerty1234',
	port: 5432
})

module.exports = dbPool