exports.up = function(knex, Promise) {
  return knex.schema.createTable('platforms', table => {
    table.increments('id');
    table
      .string('name')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('platforms');
};
