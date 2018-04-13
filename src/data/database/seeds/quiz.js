const quizzes = `
  INSERT INTO 'Quiz' VALUES
  (1,'quiz one', 'pc'),
  (2,'quiz two', 'pc'),
  (3,'quiz three', 'pc'),
  (4,'quiz four', 'pc'),
  (5,'quiz five', 'pc'),
  (6,'quiz six', 'pc')
`

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('Quiz').truncate()
    .then(() =>
      knex.raw(quizzes))
}
