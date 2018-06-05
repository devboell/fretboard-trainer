export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Timer', (table) => {
      table.integer('quizId').notNullable()
      table.enum('type', ['none', 'normal', 'strict']).notNullable()
      table.integer('pause')
      table.integer('time')
      table.foreign('quizId').references('id').inTable('Quiz')
        .onDelete('CASCADE')
      table.primary(['quizId'])
    }),
  ])
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Timer'),
  ])
}
