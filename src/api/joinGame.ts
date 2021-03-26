import { ResponsePlayerJoin } from "../types/interfaces"

/**
 * Returns success or error if player joined game. Will also return if the player is player 1 or player 2
 * 
 * @param {string} uuid player uuid that wants to join the game
 * @return {object} response object with status code, player number, and message
 */
 const joinGame = async (uuid: string): Promise<ResponsePlayerJoin> => {
  // I can't get import.meta to work with jest. Harding coding values for the moment
  // const apiPath: string | boolean = import.meta.env.VITE_API_PATH!
  // const apiKey: string | boolean = import.meta.env.VITE_API_KEY!

  const apiPath: string | boolean = 'https://www.dev.example.com'
  const apiKey: string | boolean = '1111-xxxx-1111-xxxx'

  // Using a template literal for the apiKey because it forces the value to be a string for typescript. I could check for strings above but it's bloated code for a variable constant
  return await fetch(`${apiPath}/join`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': `${ apiKey }` 
    },
    body: JSON.stringify({ uuid })
  })
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.error(err))
}

export default joinGame
