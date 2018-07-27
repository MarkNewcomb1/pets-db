
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pet', function(table){
    table.increments()
    table.text('name')
    table.integer('owner_id').references('person.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pet')
}
