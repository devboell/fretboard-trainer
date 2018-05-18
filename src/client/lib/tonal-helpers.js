import { compose, __, curry } from 'ramda'
import { Note } from 'tonal'

/* eslint-disable import/prefer-default-export */
export const fromChroma = (chroma, useSharps = false) => compose(
  Note.pc,
  curry(Note.fromMidi)(__, useSharps),
)(chroma + 48)
