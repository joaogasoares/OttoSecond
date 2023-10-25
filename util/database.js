const Sequelize = require('sequelize');

// Criar a conexão postgres com a database
const sequelize = new Sequelize(
    process.env.PG_DB,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        dialect: 'postgres',
    }
)

module.exports = sequelize;