import { compose } from 'ramda'
import { Interval, Distance } from 'tonal'

/* eslint-disable import/prefer-default-export */
export const transpose = note => smtns =>
  compose(
    Distance.transpose(note),
    Interval.fromSemitones,
  )(smtns)
