import * as path from 'path';

const BasePath = path.join(__dirname, 'db');

module.exports = {
  client: 'pg',
  connection: {
    database: 'game_progression_staging',
    user: 'postgres',
    password: 'games',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: path.join(BasePath, 'migrations'),
  },
  seeds: {
    directory: path.join(BasePath, 'seeds'),
  },
};
