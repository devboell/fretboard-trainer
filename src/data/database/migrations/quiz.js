export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Quiz', (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.enum('type', ['pc', 'pitch', 'interval']).notNullable()
      table.enum('tuning', ['standard']).notNullable()
      table.integer('width').notNullable()
      table.integer('allAnswers').notNullable()
      table.integer('allowIncorrect').notNullable()
    }),
  ])
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Quiz'),
  ])
}
