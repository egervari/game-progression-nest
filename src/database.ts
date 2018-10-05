import * as knex from 'knex';

import * as config from '../knexfile';

export const database = knex(config);
