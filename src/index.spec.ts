import { add } from '.'

describe('index.ts', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 2)).toBe(3)
    })
  })
})
