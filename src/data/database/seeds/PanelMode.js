const panelModes = `
  INSERT INTO 'PanelMode' VALUES
  (1,'fretboard', 'name'),
  (2,'fretboard', 'staff'),
  (3,'fretboard', 'sound'),
  (4,'name', 'fretboard'),
  (5,'name', 'staff'),
  (6,'name', 'sound'),
  (7,'staff', 'fretboard'),
  (8,'staff', 'name'),
  (9,'staff', 'sound'),
  (10,'sound', 'fretboard'),
  (11,'sound', 'name'),
  (12,'sound', 'staff')
`

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('PanelMode').truncate()
    .then(() =>
      knex.raw(panelModes))
}
