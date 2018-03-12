import { times, sum } from 'ramda'
import { width } from '../fretboard'

it('should check that all fret width percentages add up to 100', () => {
  const nrOfFrets = 12
  const totalWidth = 100

  const received = sum(times(width(nrOfFrets), nrOfFrets))
  expect(Math.round(received)).toBe(totalWidth)
})
