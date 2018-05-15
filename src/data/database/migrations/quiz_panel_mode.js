export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('quiz_panel_mode', (table) => {
      table.integer('quiz_id').notNullable()
      table.integer('panel_id').notNullable()
      table.foreign('quiz_id').references('id').inTable('quiz')
        .onDelete('CASCADE')
      table.foreign('panel_id').references('id').inTable('panel')
      table.primary(['quiz_id', 'panel_id'])
    }),
  ])
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('quiz_panel_mode'),
  ])
}
