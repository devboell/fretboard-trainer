const quizzes = `
  INSERT INTO 'Quiz' VALUES
  (1,'quiz one'),
  (2,'quiz two'),
  (3,'quiz three'),
  (4,'quiz four'),
  (5,'quiz five'),
  (6,'quiz six')
`

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('Quiz').truncate()
    .then(() =>
      knex.raw(quizzes))
}
