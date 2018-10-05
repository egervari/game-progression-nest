exports.seed = function(knex, Promise) {
  return knex('languages')
    .del()
    .then(function() {
      return knex('languages').insert([
        {
          id: 1,
          name: 'English',
          code: 'en',
        },
        {
          id: 2,
          name: 'French',
          code: 'fr',
        },
      ]);
    });
};
