import { ResponsePlayerAction } from "../types/interfaces"

/**
 * Returns the amount of people watching the game
 * 
 * @param {number} x cordinate
 * @param {number} y cordinate
 * @return {string} success or error
 */
 const playerAction = async (gridPosition: number, playerUUID: string, x: number, y: number): Promise<ResponsePlayerAction> => {
  // I can't get import.meta to work with jest. Harding coding values for the moment
  // const apiPath: string | boolean = import.meta.env.VITE_API_PATH!
  // const apiKey: string | boolean = import.meta.env.VITE_API_KEY!

  const apiPath: string | boolean = 'https://www.dev.example.com'
  const apiKey: string | boolean = '1111-xxxx-1111-xxxx'

  // Using a template literal for the apiKey because it forces the value to be a string for typescript. I could check for strings above but it's bloated code for a variable constant
  return await fetch(`${apiPath}/player-action`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': `${ apiKey }` 
    },
    body: JSON.stringify({ gridPosition, playerUUID, x, y })
  })
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.error(err))
}

export default playerAction
