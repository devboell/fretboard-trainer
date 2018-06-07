
// only use sample &  shuffle from lodash
import { sample, sampleSize, shuffle } from 'lodash/fp'
import {
  compose,
  append,
  pluck,
  without,
  uniq,
  map,
} from 'ramda'
import { Note } from 'tonal'
import { locsForMidi } from '../fretboard'
import { useSharps } from './index'


export const availableMidis = midi => midiLocs => compose(
  uniq,
  without([midi]),
  pluck('midi'),
)(midiLocs)


const pitchEntity = (midi) => {
  const pitch = Note.fromMidi(midi, useSharps())
  return {
    name: pitch,
    notes: [pitch],
  }
}

const pitchChoices = (entity, midi, midiLocs) => compose(
  shuffle,
  append(entity),
  map(pitchEntity),
  sampleSize(3),
  availableMidis(midi),
)(midiLocs)


export default (midiLocs) => {
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

