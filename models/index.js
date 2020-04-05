'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
//if (config.use_env_variable) {
  sequelize = new Sequelize("mysql://b31ab78da2682d:504561ed@us-cdbr-iron-east-04.cleardb.net/heroku_7b48086a6fe2b89?reconnect=true", {
    dialect:  "mysql",
    protocol: "mysql",
    port: "3306",
    host: "us-cdbr-iron-east-04.cleardb.net",
    logging:  true
  });
//} else {
//  sequelize = new Sequelize(config.database, config.username, config.password, config);
//}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
