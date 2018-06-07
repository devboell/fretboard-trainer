import { flatten } from 'ramda'
import intervalQuestion, { createIntervalLoc } from '../interval'
import { midiFretboard } from '../../fretboard'

const width = 6
const tuning = 'standard'
const midiLocs = flatten(midiFretboard(tuning, width))

it('intervalQuestion', () => {
  // expect(intervalQuestion(midiLocs)).toMatchSnapshot()
})

/*
it('createIntervalLoc', () => {
  const E2 = { midi: 40, loc: { str: 5, pos: 0 } }
  const A2 = { midi: 45, loc: { str: 5, pos: 5 } }

  console.log('createIntervalLoc', createIntervalLoc(E2, A2))
  console.log('createIntervalLoc', createIntervalLoc(A2, E2))
})
*/