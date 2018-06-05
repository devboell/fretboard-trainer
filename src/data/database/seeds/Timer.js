const timers = `
  INSERT INTO 'Timer' VALUES
  (1,'none', null, null),
  (2,'normal', 500, null),
  (3,'strict', 500, 3000),
  (4,'none', null, null),
  (5,'none', null, null),
  (6,'none', null, null)
`

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('Timer').truncate()
    .then(() =>
      knex.raw(timers))
}
