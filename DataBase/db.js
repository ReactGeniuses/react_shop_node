import { Sequelize } from 'sequelize';

/* const db = new Sequelize('Proyecto', 'prueba', '12345', {
  host: 'BIBLIO-404787',
  dialect: 'mssql',
  logging: false, // Desactiva el registro de consultas SQL en la consola (opcional)
}); */

const db = new Sequelize('shopshop', 'shopshop', 'DQ@20241a', {
  host: 'eu-az-sql-serv1.database.windows.net',
  dialect: 'mssql',
  logging: false, ////Desactiva el registro de consultas SQL en la consola (opcional)
});

export default db;