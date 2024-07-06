import { Sequelize } from 'sequelize';

/* const db = new Sequelize('Proyecto', 'prueba', '12345', {
  host: 'BIBLIO-404787',
  dialect: 'mssql',
  logging: false, // Desactiva el registro de consultas SQL en la consola (opcional)
}); */

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

export default db;
