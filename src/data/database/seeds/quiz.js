const quizzes = `
  INSERT INTO 'quiz' VALUES
  (1,'quiz one', 'pc', 'standard', 13),
  (2,'quiz two', 'pc', 'standard', 13),
  (3,'quiz three', 'pc', 'standard', 13),
  (4,'quiz four', 'pc', 'standard', 13),
  (5,'quiz five', 'pc', 'standard', 13),
  (6,'quiz six', 'pc', 'standard', 13)
`

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('quiz').truncate()
    .then(() =>
      knex.raw(quizzes))
}
