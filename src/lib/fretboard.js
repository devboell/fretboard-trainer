/* eslint-disable import/prefer-default-export */
import { times, sum } from 'ramda'

export const fretWidth = nrFrets => pos =>
  (((2 ** (1 / nrFrets)) - 1) /
  (2 ** ((pos + 1) / nrFrets))) * 100 * 2

export const fretOffset = nrFrets => pos =>
  // (1 - (1 / (2 ** (pos / nrFrets)))) * 100 * 2
  sum(times(fretWidth(nrFrets), pos))

export const stringHeight = nrOfStrings => 100 / nrOfStrings

export const stringOffset = nrOfStrings => str =>
  str * stringHeight(nrOfStrings)

export const stringCenter = nrOfStrings => str =>
  stringOffset(nrOfStrings)(str) + (stringHeight(nrOfStrings) / 2)
