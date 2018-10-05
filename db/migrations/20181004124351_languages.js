exports.up = function(knex, Promise) {
  return knex.schema.createTable('languages', table => {
    table.increments('id');
    table
      .string('name')
      .notNullable()
      .unique();
    table.string('code').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('languages');
};
