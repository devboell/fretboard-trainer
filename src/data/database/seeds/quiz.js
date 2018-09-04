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
    'You should click all the possible frets for the asked note. You have 10 seconds',
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
    'Notes with octaves I',
    'Notice how each note has an octave number. An answer is only correct if you get the octave right as well. Check out the different Modes, you can improve your sight reading and train your ear with the staff and sound modes.',
    'pitch',
    'standard',
    13,
    1,
    1,
    0,
    10,
    0,
    1
  ),
  (
    4,
    'Notes with octaves II',
    'Again notes with octaves, but now you are under time pressure',
    'pitch',
    'standard',
    13,
    1,
    1,
    1,
    10,
    0,
    0
  ),
  (
    5,
    'Intervals I',
    'no description',
    'interval',
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
    'Intervals II',
    'no description',
    'interval',
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
