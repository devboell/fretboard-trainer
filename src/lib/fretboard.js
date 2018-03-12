export const offset = (pos, nrFrets) =>
  (1 - (1 / (2 ** (pos / nrFrets)))) * 100 * 2

export const width = nrFrets => pos =>
  (((2 ** (1 / nrFrets)) - 1) /
  (2 ** ((pos + 1) / nrFrets))) * 100 * 2

export const position = (pos, nrFrets) =>
  offset(pos, nrFrets) + width(pos, nrFrets)
