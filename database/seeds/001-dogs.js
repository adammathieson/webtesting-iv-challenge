
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        { name: 'John Wayne' },
        { name: 'Mink' },
        { name: 'Calamity Jane' },
        { name: 'Becca' }
      ]);
    });
};
