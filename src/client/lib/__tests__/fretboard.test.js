import {
  midiFretboard,
  chromaFretboard,
} from '../fretboard'

const width = 6
const tuning = 'standard'

it('returns a matrix of midis and locs', () => {
  expect(midiFretboard(tuning, width)).toMatchSnapshot()
})

it('returns a matrix of chromas and locs', () => {
  expect(chromaFretboard(tuning, width)).toMatchSnapshot()
})
