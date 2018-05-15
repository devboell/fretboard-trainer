export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('quiz', (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.enum('type', ['pc']).notNullable()
      table.enum('tuning', ['standard']).notNullable()
      table.integer('width').notNullable()
    }),
  ])
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('quiz'),
  ])
}
