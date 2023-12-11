const express = require("express");
const cors = require('cors');

const { sequelize } = require('./database/conexiondb');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4100;

    this.routersCliente = '/api';

    this.middleware();
    this.conexiondb();
    this.routers();
  }
  middleware(){
    this.app.use(cors());
    this.app.use(express.json());
  }
  conexiondb(){
    sequelize;
  }
  routers() {
    this.app.use(this.routersCliente, require('./routers/cliente'));
  }
  listen() {
    this.app.listen(this.port, () => {
        console.log('El servidor corriendo en el puerto:', this.port);
    });
  }
}

module.exports = {
  Server,
};
