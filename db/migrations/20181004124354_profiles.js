exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id');
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('image').notNullable();
    table.integer('languageId').notNullable();
    table.integer('averageNumberOfHoursPerDay').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles');
};
