/**
 * Returns true or false depending on the status code
 *
 * @return {boolean} true if 200s or false if error code is 400s
 */

const handleAPIResponse = (statusCode: number): boolean => {
  switch(statusCode) {
    case 200:
      return true
    case 201:
      return true
    case 202:
      return true
    case 206:
      return true
    case 400: 
      return false
    case 401: 
      return false
    case 404: 
      return false
    case 406: 
      return false
    default:
      return false
  }
}

export default handleAPIResponse
