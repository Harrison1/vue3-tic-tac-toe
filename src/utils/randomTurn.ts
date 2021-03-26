/**
 * Returns 1 or 2
 *
 * @return {number} number random 1 or 2 indicating which player starts first
 */
const randomTurn = (): Number => Math.random() < 0.5 ? 1 : 2

export default randomTurn
