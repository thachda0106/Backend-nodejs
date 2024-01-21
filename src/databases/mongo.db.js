const mongoose = require("mongoose");

const { db: { host, name, port }  } = require('../configs/db.configs');

const CONNECTION_STRING = `mongodb://${host}:${port}/${name}`;

class Database {
  static mongoClient;

  static async connect() {
    if(process.env.NODE_ENV === 'development') {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    try {
      this.mongoClient = await mongoose.connect(CONNECTION_STRING);
      console.log('Connect DB successfully.', `Connections count: ${mongoose.connections.length}`)
    } catch (error) {
      console.log('Connect DB failed.', error.message)
    }
  }
  
  static async getMongoClient() {
    if(!this.mongoClient) {
      await Database.connect();
    }

    return Database.mongoClient;
  }
}

module.exports = Database.getMongoClient();
