const quizzes = `
  INSERT INTO 'Quiz' VALUES
  (1,'quiz one', 'pc', 'standard', 13, 0, 1, 0, 0),
  (2,'quiz two', 'pitch', 'standard', 13, 1, 1, 1, 5),
  (3,'quiz three', 'pitch', 'standard', 13, 1, 1, 1, 5),
  (4,'quiz four', 'pitch', 'standard', 13, 1, 1, 1, 5),
  (5,'quiz five', 'pitch', 'standard', 13, 1, 1, 1, 5),
  (6,'quiz six', 'pitch', 'standard', 13, 1, 1, 1, 5)
`

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('Quiz').truncate()
    .then(() =>
      knex.raw(quizzes))
}
