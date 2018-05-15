const quizzes = `
  INSERT INTO 'quiz_panel_mode' VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (2, 1),
  (2, 2),
  (3, 1),
  (4, 1),
  (5, 1),
  (6, 1)
`

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('quiz_panel_mode').truncate()
    .then(() =>
      knex.raw(quizzes))
}
