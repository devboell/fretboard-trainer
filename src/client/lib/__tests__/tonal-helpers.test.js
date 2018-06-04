import { fromChroma, transposeForGuitar } from '../tonal-helpers'

it('fromChroma', () => {
  expect(fromChroma(0)).toBe('C')
  expect(fromChroma(1, false)).toBe('Db')
  expect(fromChroma(1, true)).toBe('C#')
})

it('transposeForGuitar', () => {
  expect(transposeForGuitar('F#4')).toBe('F#5')
  expect(transposeForGuitar('C2')).toBe('C3')
  expect(transposeForGuitar('Eb3')).toBe('Eb4')
})
