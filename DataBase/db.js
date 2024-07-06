import { Sequelize } from 'sequelize';

/* const db = new Sequelize('Proyecto', 'prueba', '12345', {
  host: 'BIBLIO-404787',
  dialect: 'mssql',
  logging: false, // Desactiva el registro de consultas SQL en la consola (opcional)
}); */

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', // Asegúrate de usar el dialecto correcto para PostgreSQL en Heroku
  logging: false, // Desactiva el registro de consultas SQL en la consola (opcional)
});

export default db;
