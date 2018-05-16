export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Quiz_PanelMode', (table) => {
      table.integer('quizId').notNullable()
      table.integer('panelModeId').notNullable()
      table.foreign('quizId').references('id').inTable('Quiz')
        .onDelete('CASCADE')
      table.foreign('panelModeId').references('id').inTable('PanelMode')
      table.primary(['quizId', 'panelModeId'])
    }),
  ])
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Quiz_PanelMode'),
  ])
}
