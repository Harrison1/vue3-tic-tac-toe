import { ResponseStartGame } from "../types/interfaces"

/**
 * Returns response object indicating the game has started or if there was an error
 * 
 * @param {boolean} start start the game
 * @return {object} response object success or error
 */
 const startGame = (start: boolean): Promise<string> => {
  // I can't get import.meta to work with jest. Harding coding values for the moment
  // const apiPath: string | boolean = import.meta.env.VITE_API_PATH!
  // const apiKey: string | boolean = import.meta.env.VITE_API_KEY!

  const apiPath: string | boolean = 'https://www.dev.example.com'
  const apiKey: string | boolean = '1111-xxxx-1111-xxxx'

  // Using a template literal for the apiKey because it forces the value to be a string for typescript. I could check for strings above but it's bloated code for a variable constant
  return fetch(`${apiPath}/start-game`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': `${ apiKey }`
    },
    body: JSON.stringify({ start })
  })
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.error(err))
}

export default startGame
