const dotenv = require("dotenv");

dotenv.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.production"
});

module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "",
  "database": "vacpet",
  "entities": [process.env.TYPEORM_ENTITIES],
  "migrations": [process.env.TYPEORM_MIGRATION],
  "cli":{
    "migrationsDir": [process.env.TYPEORM_MIGRATION_DIR]
  }
}