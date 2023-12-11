const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/conexiondb');

const Cliente = sequelize.define('cliente', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      apellidos: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      telefonos: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      tipo: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      dni: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    }, {
      // Opcional: Puedes especificar el nombre de la tabla en la base de datos
      tableName: 'clientes',

});

sequelize.sync()
  .then(() => {
    console.log('La tabla Clientes ha sido sincronizada con la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar la tabla Clientes:', error);
});

module.exports = {
    Cliente
}