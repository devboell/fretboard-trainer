const quizzes = `
  INSERT INTO 'Quiz' VALUES
  (
    1,
    'Notes I',
    'Very easy training to help memorize the notes on the fretboard. The fretboard displays all the note names, so they are easy to find. This is just a warm-up.',
    'pc',
    'standard',
    13,
    0,
    1,
    0,
    0,
    1,
    0
  ),
  (
    2,
    'Notes II',
    'no description',
    'pc',
    'standard',
    13,
    1,
    1,
    1,
    5,
    0,
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
    0,
    1
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
    0,
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
    0,
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
    0,
    0
  )
`

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('Quiz').truncate()
    .then(() =>
      knex.raw(quizzes))
}
