
// only use sample &  shuffle from lodash
import { sample, sampleSize, shuffle } from 'lodash/fp'
import { compose, filter, eqProps, append, uniqWith, flatten } from 'ramda'
import { midiFretboard } from './fretboard'

const choices = (midiLoc, midiLocs) => compose(
  shuffle,
  append(midiLoc),
  sampleSize(3),
  uniqWith(eqProps('midi')),
  filter(ml => !eqProps('midi', midiLoc, ml)),
)(midiLocs)

const pcQuestion = (midiLocs) => {
  const midiLoc = sample(midiLocs)

  const entity = {
    name: midiLoc.midi,
    rootLoc: midiLoc.loc,
    otherLocs: [],
  }
  return {
    entity,
    choices: choices(midiLoc, midiLocs),
  }
}

export default (quiz) => {
  const { tuning, width } = quiz
  const midiLocs = flatten(midiFretboard(tuning, width))

  switch (quiz.type) {
    case 'pc': return pcQuestion(midiLocs)
    // case 'pitch': return pitchQuestion(fb)
    default: return null
  }
}
/**
 * Musical entities are pcs, pitches, ivls, chords and scales
 * all have a name, and are comprised of one or more notes (pitches)
 *
 * There are 4 ways of presenting a musical entity
 * - fb: locations of the notes
 * - name: name of the entity
 * - staff: notes
 * - sound: notes
 *
 * The question will always be one entity
 *
 *
 * If the fretboard asks the question, there will be 4 unique choices.
 *
 *
 * example Pc:
 *
 *
 */
