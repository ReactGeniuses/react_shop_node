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
  connectionString: 'Server=tcp:eu-az-sql-serv1.database.windows.net,1433;Initial Catalog=shopshop;Persist Security Info=False;User ID=shopshop;Password=DQ@20241a;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;',
  logging: false, // Desactiva el registro de consultas SQL en la consola (opcional)
});

export default db;
