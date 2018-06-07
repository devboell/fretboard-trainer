
// only use sample &  shuffle from lodash
import { sample } from 'lodash/fp'
import { flatten } from 'ramda'
import pcQuestion from './pc'
import pitchQuestion from './pitch'
import { chromaFretboard, midiFretboard } from '../fretboard'

export const useSharps = () => sample([true, false])

export default (quiz) => {
  const { tuning, width } = quiz

  switch (quiz.type) {
    case 'pc': {
      const chromaLocs = flatten(chromaFretboard(tuning, width))
      return pcQuestion(chromaLocs)
    }
    case 'pitch': {
      const midiLocs = flatten(midiFretboard(tuning, width))
      return pitchQuestion(midiLocs)
    }

    default: return null
  }
}

/* NOTES
  entity: {
    name,
    displayName,
    notes,
  }
  question: {
    panels: {
      question: {
        locs,
        entity,
      }
      answer: {
        locs,
        choices,  // entities
      }
    evaluation: {
      locs,
      entity, // correct choice
    }
  }

  fretboardQuestion: {
    panels: {
      question: {
        locs,
      }
      answer: {
        choices,  // entities
      }
    evaluation: {
      entity, // correct choice
    }
  }

  entityPanelQuestion: {
    panels: {
      question: {
        entity,
      }
      answer: {
        locs,
      }
    evaluation: {
      locs, // shapes
    }
  }

  question: {
    questionPanel: locs | entity
    answerPanel: locs | choices
    evaluation: locs | entity
  }
*/
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
