export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Quiz', (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.enum('type', ['pc']).notNullable()
    }),
  ])
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Quiz'),
  ])
}
