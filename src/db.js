const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'monorail.proxy.rlwy.net',
  database: 'postgres',
  password: 'SoUtGSpYHrfbUtaoLbzWjyRqoSjbuAhI',
  port: 24417,
});

module.exports = pool;
