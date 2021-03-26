import { ResponseRoomTotals } from "../types/interfaces";

/**
 * Returns the amount of people total in the room
 *
 * @return {number} number of people in the game room, including all watchers and players
 */
const fetchObservers = (uuid: string): Promise<ResponseRoomTotals> => {
  const apiPath: string | boolean = import.meta.env.VITE_API_PATH!
  const apiKey: string | boolean = import.meta.env.VITE_API_KEY!

  // Using a template literal for the apiKey because it forces the value to be a string for typescript. I could check for strings above but it's bloated code for a variable constant
  return fetch(`${apiPath}/observers/?gameUUID=${uuid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': `${ apiKey }` 
    }
  })
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.error(err))
}

export default fetchObservers
