exports.seed = function(knex, Promise) {
  return knex('profiles')
    .del()
    .then(function() {
      return knex('profiles').insert([
        {
          id: 1,
          firstName: 'Katie',
          lastName: 'Egervari',
          image: 'profile-image.jpg',
          languageId: 1,
          averageNumberOfHoursPerDay: 2,
        },
      ]);
    });
};
