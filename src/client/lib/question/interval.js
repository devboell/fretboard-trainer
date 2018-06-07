import { sample, sampleSize, shuffle } from 'lodash/fp'
import {
  compose,
  prop,
  groupBy,
  dissoc,
  values,
  map,
  flatten,
  append,
} from 'ramda'
import { Note } from 'tonal'
import { locsForMidi } from '../fretboard'
import { useSharps } from './index'

const intervalNames = ['2m', '2M', '3m', '3M', '4P', '5d', '5P', '6m', '6M', '7m', '7M', '8P']


export const createIntervalLoc = (rootMl, noteMl) => {
  const { midi: rootMidi } = rootMl
  const { midi: noteMidi } = noteMl
  const diff = noteMidi - rootMidi
  const ivl = diff % 12
  const oct = Math.floor(Math.abs(diff) / 12)

  return (diff === 0)
    ? null
    : {
      rootMl,
      noteMl,
      name: intervalNames[Math.abs(ivl) - 1],
      ivl,
      oct,
    }
}

const createIntervalLocs = midiLocs =>
  midiLocs.map(rootMl =>
    midiLocs.reduce((acc, noteMl) => {
      const interval = createIntervalLoc(rootMl, noteMl)
      return interval && !(interval.ivl < 0) && interval.oct === 0 // filter! asc, within octave
        ? [...acc, interval]
        : acc
    }, []))

const intervalEntity = ({
  name,
  rootMl: { midi: rootMidi },
  noteMl: { midi: noteMidi },
}) => {
  const root = Note.fromMidi(rootMidi, useSharps())
  const note = Note.fromMidi(noteMidi, useSharps())

  return {
    name,
    notes: [root, note],
  }
}

export const choices = (entity, intervalLocs) => compose(
  shuffle,
  append(entity),
  map(intervalEntity),
  flatten, // flatten the three resulting choices in one array
  map(sample), // sample one intervalLoc per interval
  values, // remove the grouping, make array of arrays
  sampleSize(3), // choose 3 interval groups. !! should have guard for < 3
  dissoc(entity.name), // remove the interval of the question entity
  groupBy(prop('name')), // group by interval
)(intervalLocs)

export default (midiLocs) => {
  const intervalLocs = flatten(createIntervalLocs(midiLocs))
  const intervalLoc = sample(intervalLocs)
  const entity = intervalEntity(intervalLoc)
  const rootLocObj = { loc: intervalLoc.rootMl.loc, label: 'root' }
  return {
    panels: {
      question: {
        locs: [rootLocObj, intervalLoc.noteMl.loc],
        entity,
      },
      answer: {
        locs: [rootLocObj],
        choices: choices(entity, intervalLocs),
      },
    },
    evaluation: {
      locs: locsForMidi(intervalLoc.noteMl.midi, midiLocs),
      entity,
    },
  }
}
