import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import joinGame from '../api/joinGame'
import { ResponsePlayerJoin } from '../types/interfaces';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('joinGame', () => {
  it('Return 200 Success for player 1', async () => {
    const mockResult: ResponsePlayerJoin = {
      statusCode: 201,
      message: 'Success',
      player: 1
    }
    const uuid = 'xxxx-eeee-dddd-aaaa'
    fetchMock.mockResponseOnce(JSON.stringify(mockResult))

    const res = await joinGame(uuid)
    expect(res).toEqual(mockResult)
    expect(fetchMock.mock.calls.length).toEqual(1)
  })

  it('Return 200 Success for player 2', async () => {
    const mockResult: ResponsePlayerJoin = {
      statusCode: 201,
      message: 'Success',
      player: 2
    }
    const uuid = 'xxxx-eeee-dddd-aaaa'
    fetchMock.mockResponseOnce(JSON.stringify(mockResult))

    const res = await joinGame(uuid)
    expect(res).toEqual(mockResult)
    expect(fetchMock.mock.calls.length).toEqual(1)
  })

  it('Return 400 Bad Request', async () => {
    const mockResult: ResponsePlayerJoin = {
      statusCode: 400,
      message: 'BAD_REQUEST'
    }
    const uuid = 'xxxx-eeee-dddd-aaaa'
    fetchMock.mockResponseOnce(JSON.stringify(mockResult))

    const res = await joinGame(uuid)
    expect(res).toEqual(mockResult)
    expect(fetchMock.mock.calls.length).toEqual(1)
  })

})

