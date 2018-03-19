import { compose } from 'ramda'
import { Interval, Distance, Note } from 'tonal'

/* eslint-disable import/prefer-default-export */
export const transpose = note => smtns =>
  compose(
    Distance.transpose(note),
    Interval.fromSemitones,
  )(smtns)

export const comparePitch = (note1, note2) =>
  Note.midi(note1) === Note.midi(note2)

export const comparePc = (note1, note2) =>
  Note.chroma(note1) === Note.chroma(note2)

export const isPc = note => Note.oct(note) === null

export const isEqual = note1 => note2 => (
  isPc(note2)
    ? comparePc(note1, note2)
    : comparePitch(note1, note2)
)

export const oct = note => Note.oct(note)
