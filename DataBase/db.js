const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: false,
    },
  },
  host: 'eu-az-sql-serv1.database.windows.net',
  database: 'shopshop',
  username: 'shopshop',
  password: 'DQ@20241a',
  port: process.env.PORT || 1433,
  logging: false,
});

// Verificar la conexión
async function testConnection() {
  try {
    await db.authenticate();
    console.log('Conexión establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar:', error);
  }
}

testConnection();

module.exports = db;