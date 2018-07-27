
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('person').del(),

    // Inserts seed entries
    knex('person').insert({id: 1, name: 'Peter'}),
    knex('person').insert({id: 2, name: 'James'}),
    knex('person').insert({id: 3, name: 'Brooks'}),
    knex('person').insert({id: 4, name: 'Mark'})
  )
}
