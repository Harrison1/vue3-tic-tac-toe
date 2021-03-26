import errorMessages from '../constants/errorMessages'

/**
 * Returns true or false depending on the status code
 * @param {number} statusCode
 * @return {string} error message 
 */

// can't satisfy typescript
// const handleErrorMessages = (statusCode: number): string => errorMessages?.[statusCode] ?? errorMessages.default

const handleErrorMessages = (statusCode: number): string => {
  switch(statusCode) {
    case 400:
      return errorMessages[400]
    case 401:
      return errorMessages[401]
    case 404:
      return errorMessages[404]
    case 406:
      return errorMessages[406]
    default:
      return errorMessages.default
  }
}

export default handleErrorMessages
