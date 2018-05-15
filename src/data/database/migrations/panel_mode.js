export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('panel_mode', (table) => {
      table.increments('id').notNullable()
      table.string('q').notNullable()
      table.string('a').notNullable()
    }),
  ])
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('panel_mode'),
  ])
}
