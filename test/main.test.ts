import { merge } from '@/index'

const a = {
  s: 'string',
  un: 'unchanged',
  a: [1, 2, 3],
  o: {
    a: 'A',
    aa: [],
    b: 'B',
    c: 'C',
  },
}

const b = {
  s: 'new value',
  ss: 'another',
  a: [4, 5],
  o: {
    a: 'apple',
    d: 'disc',
    aa: [0, -0],
  },
}

const result = {
  s: 'new value',
  un: 'unchanged',
  ss: 'another',
  a: [1, 2, 3, 4, 5],
  o: {
    a: 'apple',
    b: 'B',
    c: 'C',
    d: 'disc',
    aa: [0, -0],
  },
}

describe('merge function', () => {
  test('cases', () => {
    expect(merge(a, b)).toEqual(result)
  })
})
