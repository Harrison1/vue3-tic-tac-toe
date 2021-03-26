import errorMessages from '../constants/errorMessages'
import handleErrorMessages from '../api/handleErrorMessages'

describe('handleErrorMessages', () => {
  
  it('should return 400 error message', () => {
    const statusCode = 400
    expect(handleErrorMessages(statusCode)).toEqual(errorMessages[400])
  })

  it('should return 401 message', () => {
    const statusCode = 401
    expect(handleErrorMessages(statusCode)).toEqual(errorMessages[401])
  })

  it('should return 404 error message', () => {
    const statusCode = 404
    expect(handleErrorMessages(statusCode)).toEqual(errorMessages[404])
  })

  it('should return 406 error message', () => {
    const statusCode = 406
    expect(handleErrorMessages(statusCode)).toEqual(errorMessages[406])
  })

  it('should return default message', () => {
    const statusCode = 411
    expect(handleErrorMessages(statusCode)).toEqual(errorMessages.default)
  })

})
