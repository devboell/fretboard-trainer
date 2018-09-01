const quizzes = `
  INSERT INTO 'Quiz' VALUES
  (
    1,
    'Pitch Class',
    'Just notes, no octaves, no timer',
    'pc',
    'standard',
    13,
    0,
    1,
    0,
    0,
    1
  ),
  (
    2,
    'quiz two',
    'no description',
    'pitch',
    'standard',
    13,
    1,
    1,
    1,
    5,
    0
  ),
  (
    3,
    'quiz three',
    'no description',
    'pitch',
    'standard',
    13,
    1,
    1,
    1,
    5,
    0
  ),
  (
    4,
    'quiz four',
    'no description',
    'pitch',
    'standard',
    13,
    1,
    1,
    1,
    5,
    0
  ),
  (
    5,
    'quiz five',
    'no description',
    'pitch',
    'standard',
    13,
    1,
    1,
    1,
    5,
    0
  ),
  (
    6,
    'quiz six',
    'no description',
    'pitch',
    'standard',
    13,
    1,
    1,
    1,
    5,
    0
  )
`

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('Quiz').truncate()
    .then(() =>
      knex.raw(quizzes))
}
