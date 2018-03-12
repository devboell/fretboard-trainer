/* eslint-disable import/prefer-default-export */

export const width = nrFrets => pos =>
  (((2 ** (1 / nrFrets)) - 1) /
  (2 ** ((pos + 1) / nrFrets))) * 100 * 2
