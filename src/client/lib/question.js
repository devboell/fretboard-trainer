
// only use sample &  shuffle from lodash
import { sample, sampleSize, shuffle, pluck, without, uniq } from 'lodash/fp'
import { compose, append, flatten } from 'ramda'
import { fromChroma } from 'lib/tonal-helpers'
import { chromaFretboard } from './fretboard'

const useSharps = () => sample([true, false])

export const availableChromaChoices = chroma => chromaLocs => compose(
  uniq,
  without([chroma]),
  pluck('chroma'),
)(chromaLocs)

const chromaChoices = (chroma, chromaLocs) => compose(
  sampleSize(3),
  availableChromaChoices(chroma),
)(chromaLocs)


const pcQuestion = (chromaLocs) => {
  const chromaLoc = sample(chromaLocs)
  const incorrect = chromaChoices(chromaLoc.chroma, chromaLocs)

  const pcName = fromChroma(chromaLoc.chroma, useSharps())
  const incorrectPcNames = incorrect.map(chroma =>
    fromChroma(chroma, useSharps()))

  const entity = {
    name: pcName,
    rootLoc: chromaLoc.loc,
    otherLocs: [],
  }
  return {
    entity,
    choices: shuffle(append(pcName, incorrectPcNames)),
  }
}

export default (quiz) => {
  const { tuning, width } = quiz

  switch (quiz.type) {
    case 'pc': {
      const chromaLocs = flatten(chromaFretboard(tuning, width))
      return pcQuestion(chromaLocs)
    }
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
 *  - get all available pclocs from the fretboard
 *     the fretboard is always the basis of question selection
 *  - select one
 *     this is the main Question
 *  - get all equivalent pclocs (same pc)
 *      these locs are the fretboard answers.
 *  - remove selected pc and equivalent pclocs from available pclocs
 *       these are the basis for the three multiple choice wrong answers
 *  - make them unique by name, and sample three
 *  - assign random enharm. where needed
 *
 *
 */
