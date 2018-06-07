import { times, reverse, compose, map, filter } from 'ramda'
import { Note } from 'tonal'

const tuningsMap = {
  standard: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
}

export const midiLocFn = (open, str, pos) => ({
  midi: Note.midi(open) + pos,
  loc: { str, pos },
})

export const chromaLocFn = (open, str, pos) => ({
  chroma: (Note.chroma(open) + pos) % 12,
  loc: { str, pos },
})

const position = (tuning, fretFn) => pos =>
  reverse(tuning).map((open, str) => fretFn(open, str, pos))

export const fretboard = (tuning, width, fretFn) =>
  times(position(tuning, fretFn), width)

export const midiFretboard = (tuning, width) =>
  fretboard(tuningsMap[tuning], width, midiLocFn)

export const chromaFretboard = (tuning, width) =>
  fretboard(tuningsMap[tuning], width, chromaLocFn)


export const locsForMidi = (midi, midiLocs) => compose(
  map(ml => ml.loc),
  filter(ml => midi === ml.midi),
)(midiLocs)
