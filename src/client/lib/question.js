
// only use sample &  shuffle from lodash
import { sample, sampleSize, shuffle } from 'lodash/fp'
import {
  compose,
  append,
  flatten,
  pluck,
  without,
  uniq,
  filter,
  map,
} from 'ramda'
import { Note } from 'tonal'
import { fromChroma } from 'lib/tonal-helpers'
import { chromaFretboard, midiFretboard } from './fretboard'

const useSharps = () => sample([true, false])

export const availableChromas = chroma => chromaLocs => compose(
  uniq,
  without([chroma]),
  pluck('chroma'),
)(chromaLocs)

export const availableMidis = midi => midiLocs => compose(
  uniq,
  without([midi]),
  pluck('midi'),
)(midiLocs)

const pcEntity = chroma => ({
  name: fromChroma(chroma, useSharps()),
  notes: null,
})

const pitchEntity = (midi) => {
  const pitch = Note.fromMidi(midi, useSharps())
  return {
    name: pitch,
    notes: [pitch],
  }
}

const pcChoices = (entity, chroma, chromaLocs) => compose(
  shuffle,
  append(entity),
  map(pcEntity),
  sampleSize(3),
  availableChromas(chroma),
)(chromaLocs)

const pitchChoices = (entity, midi, midiLocs) => compose(
  shuffle,
  append(entity),
  map(pitchEntity),
  sampleSize(3),
  availableMidis(midi),
)(midiLocs)

const locsForChroma = (chroma, chromaLocs) => compose(
  map(cl => cl.loc),
  filter(cl => chroma === cl.chroma),
)(chromaLocs)

const locsForMidi = (midi, midiLocs) => compose(
  map(ml => ml.loc),
  filter(ml => midi === ml.midi),
)(midiLocs)

export const pcQuestion = (chromaLocs) => {
  const chromaLoc = sample(chromaLocs)
  const entity = pcEntity(chromaLoc.chroma)

  return {
    panels: {
      question: {
        locs: [chromaLoc.loc],
        entity,
      },
      answer: {
        locs: [],
        choices: pcChoices(entity, chromaLoc.chroma, chromaLocs),
      },
    },
    evaluation: {
      locs: locsForChroma(chromaLoc.chroma, chromaLocs),
      entity,
    },
  }
}

export const pitchQuestion = (midiLocs) => {
  const midiLoc = sample(midiLocs)
  const entity = pitchEntity(midiLoc.midi)

  return {
    panels: {
      question: {
        locs: [midiLoc.loc],
        entity,
      },
      answer: {
        locs: [],
        choices: pitchChoices(entity, midiLoc.midi, midiLocs),
      },
    },
    evaluation: {
      locs: locsForMidi(midiLoc.midi, midiLocs),
      entity,
    },
  }
}


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
