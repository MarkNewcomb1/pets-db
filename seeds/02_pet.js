
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pet').del(),

    // Inserts seed entries
    knex('pet').insert({id: 1, name: 'Kiki', owner_id: 1}),
    knex('pet').insert({id: 2, name: 'Bedhead', owner_id: 1}),
    knex('pet').insert({id: 3, name: 'Snoopy', owner_id: 2})
  )
}
