import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import playerAction from '../api/playerAction'
import { ResponsePlayerAction } from '../types/interfaces';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('playerAction', () => {
  it('Return 200 Success', async () => {
    const gridPosition = 5 
    const playerUUID = 'xxxx-xxxx-xxxx-xxxx'
    const x = 2 
    const y = 2
    const mockResult: ResponsePlayerAction = {
      statusCode: 200,
      message: 'Success'
    }
    fetchMock.mockResponseOnce(JSON.stringify(mockResult))

    const res = await playerAction(gridPosition, playerUUID, x, y)
    expect(res).toEqual(mockResult)
    expect(fetchMock.mock.calls.length).toEqual(1)
  }),

  it('Return 400 Bad Request', async () => {
    const gridPosition = 10
    const playerUUID = 'xxxx-xxxx-xxxx-xxxx'
    const x = 4 
    const y = 3
    const mockResult: ResponsePlayerAction = {
      statusCode: 400,
      message: 'BAD_REQUEST'
    }
    fetchMock.mockResponseOnce(JSON.stringify(mockResult))

    const res = await playerAction(gridPosition, playerUUID, x, y)
    expect(res).toEqual(mockResult)
    expect(fetchMock.mock.calls.length).toEqual(1)
  })

})
