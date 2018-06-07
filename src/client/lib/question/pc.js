import { sample, sampleSize, shuffle } from 'lodash/fp'
import {
  compose,
  append,
  pluck,
  without,
  uniq,
  filter,
  map,
} from 'ramda'
import { fromChroma } from 'lib/tonal-helpers'
import { useSharps } from './index'

export const availableChromas = chroma => chromaLocs => compose(
  uniq,
  without([chroma]),
  pluck('chroma'),
)(chromaLocs)

const pcEntity = chroma => ({
  name: fromChroma(chroma, useSharps()),
  notes: null,
})

const locsForChroma = (chroma, chromaLocs) => compose(
  map(cl => cl.loc),
  filter(cl => chroma === cl.chroma),
)(chromaLocs)

const pcChoices = (entity, chroma, chromaLocs) => compose(
  shuffle,
  append(entity),
  map(pcEntity),
  sampleSize(3),
  availableChromas(chroma),
)(chromaLocs)

export default (chromaLocs) => {
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
