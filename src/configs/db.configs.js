const development = {
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    name: process.env.DEV_DB_NAME || 'dev_db_name',
    port: process.env.DEV_DB_PORT || 27017,
  },
}

const production = {
  db: {
    host: process.env.PRO_DB_HOST || 'localhost',
    name: process.env.PRO_DB_NAME || 'pro_db_name',
    port: process.env.PRO_DB_PORT || 27017,
  },
}

const configs = { development, production };

module.exports = configs[process.env.NODE_ENV || 'development'];
