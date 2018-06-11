import { equalsIgnoreOrder } from '../runner'

const objects1 = [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }]
const objects2 = [{ x: 1, y: 1 }, { x: 0, y: 0 }, { x: 2, y: 2 }]
const objects3 = [{ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 0 }, { x: 2, y: 2 }]

const numbers1 = [0, 1, 2]
const numbers2 = [1, 0, 2]
const numbers3 = [1, 1, 0, 2]


it('should match unordered same value arrays, obj', () => {
  expect(equalsIgnoreOrder(objects1, objects2)).toBe(true)
})

it('should not match unordered same value arrays with duplicates, obj', () => {
  expect(equalsIgnoreOrder(objects1, objects3)).toBe(false)
})

it('should match unordered same value arrays, num', () => {
  expect(equalsIgnoreOrder(numbers1, numbers2)).toBe(true)
})

it('should not match unordered same value arrays with duplicates, num', () => {
  expect(equalsIgnoreOrder(numbers1, numbers3)).toBe(false)
})
