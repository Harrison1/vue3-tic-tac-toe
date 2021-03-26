import handleAPIResponse from '../api/handleAPIResponse'

describe('handleAPIResponse', () => {
  
  it('should return true', () => {
    const statusCode = 200
    expect(handleAPIResponse(statusCode)).toEqual(true)
  })

  it('should return true', () => {
    const statusCode = 201
    expect(handleAPIResponse(statusCode)).toEqual(true)
  })

  it('should return true', () => {
    const statusCode = 202
    expect(handleAPIResponse(statusCode)).toEqual(true)
  })

  it('should return false', () => {
    const statusCode = 401
    expect(handleAPIResponse(statusCode)).toEqual(false)
  })

  it('should return false', () => {
    const statusCode = 404
    expect(handleAPIResponse(statusCode)).toEqual(false)
  })

  it('should return false', () => {
    const statusCode = 406
    expect(handleAPIResponse(statusCode)).toEqual(false)
  })

})
