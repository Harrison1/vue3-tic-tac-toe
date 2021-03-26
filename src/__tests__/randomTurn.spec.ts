import randomTurn from '../utils/randomTurn'

describe('randomTurn', () => {
  
  it('should return 1 or 2', () => {
    expect(randomTurn()).not.toBeNull()
    expect(randomTurn()).toBeLessThan(3)
    expect(randomTurn()).toBeGreaterThan(0)
  })

})
