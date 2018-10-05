exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('image').notNullable();
    table.integer('platformId').notNullable();
    table.double('numberOfHoursPlayed').notNullable();
    table.double('numberOfHoursToComplete').notNullable();
    table.integer('priority').notNullable();
    table.boolean('isComplete').notNullable();
    table.datetime('dateCreated').notNullable();
    table.datetime('dateCompleted');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games');
};
