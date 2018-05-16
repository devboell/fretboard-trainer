export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('PanelMode', (table) => {
      table.increments('id').notNullable()
      table.string('question').notNullable()
      table.string('answer').notNullable()
    }),
  ])
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('PanelMode'),
  ])
}
