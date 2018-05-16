const quizPanelModes = `
  INSERT INTO 'Quiz_PanelMode' VALUES
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
  return knex('Quiz_PanelMode').truncate()
    .then(() =>
      knex.raw(quizPanelModes))
}
