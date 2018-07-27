
exports.seed = function(knex, Promise) {
  return knex('pet').del()
  .then(function() {
  return knex('person').del()
  })
}
