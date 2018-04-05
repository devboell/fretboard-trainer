export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Quiz', (table) => {
      table.increments('id')
      table.string('name')
    }),
  ])
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Quiz'),
  ])
}
