// Hard coded error messages. Here we would add in a translation package

import { ErrorMessage } from '../types/interfaces'

const errorMessages: ErrorMessage = {
  400: 'Oops! Something went wrong with the request',
  401: 'Appears you are not authorized',
  404: 'We are lost',
  406: 'That action might not be acceptable',
  default: 'Error: Bad Request'
}

export default errorMessages
