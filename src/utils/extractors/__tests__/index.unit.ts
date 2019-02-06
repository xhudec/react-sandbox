import extract, { TransformationTuple } from '..'

describe('extractors', () => {
  describe('extract', () => {
    it('Should be a function', () => {
      expect(typeof extract).toBe('function')
    })

    it('Should extract a value from simple source object', () => {
      const source = { a: 'a -> b' }
      const paths: TransformationTuple[] = [[['a'], ['b']]]

      expect(extract({ paths, source })).toEqual({ b: 'a -> b' })
    })

    it('Should extract a value from nested source object', () => {
      const source = {
        a: {
          b: {
            c: {
              d: ['Yaaay'],
            },
          },
        },
      }
      const paths: TransformationTuple[] = [[['a', 'b', 'c', 'd', 0], ['yay']]]

      expect(extract({ paths, source })).toEqual({ yay: 'Yaaay' })
    })

    it('Should handle enum scenario', () => {
      const source = {
        enumA: [{ label: 'a', value: 'a' }],
        enumB: [{ label: 'b', value: 'b' }],
        enumC: [{ label: 'c', value: 'c' }],
      }
      const paths: TransformationTuple[] = [
        [['enumA'], [], []],
        [['enumB'], [], []],
        [['enumC'], [], []],
        [['enumD'], [], []],
      ]

      expect(extract({ paths, source })).toEqual({ ...source, enumD: [] })
    })
  })
})
