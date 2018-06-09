const quizzes = `
  INSERT INTO 'Quiz' VALUES
  (1,'quiz one', 'pc', 'standard', 13, 0),
  (2,'quiz two', 'pitch', 'standard', 13, 1),
  (3,'quiz three', 'pitch', 'standard', 13, 1),
  (4,'quiz four', 'pitch', 'standard', 13, 1),
  (5,'quiz five', 'pitch', 'standard', 13, 1),
  (6,'quiz six', 'pitch', 'standard', 13, 1)
`

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('Quiz').truncate()
    .then(() =>
      knex.raw(quizzes))
}
