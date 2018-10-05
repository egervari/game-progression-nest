exports.seed = function(knex, Promise) {
  return knex('platforms')
    .del()
    .then(function() {
      return knex('platforms').insert([
        {
          id: 1,
          name: 'PS4',
        },
        {
          id: 2,
          name: 'Switch',
        },
        {
          id: 3,
          name: 'Wii U',
        },
        {
          id: 4,
          name: '3DS',
        },
        {
          id: 5,
          name: 'PC',
        },
      ]);
    });
};
