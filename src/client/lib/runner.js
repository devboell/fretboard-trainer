import { union } from 'ramda'

const equalLength = (a1, a2) => a1.length === a2.length

/* eslint-disable import/prefer-default-export */
export const equalsIgnoreOrder = (a1, a2) =>
  equalLength(a1, a2) && equalLength(a1, union(a1, a2))
