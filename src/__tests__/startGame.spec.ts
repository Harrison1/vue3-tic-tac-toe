import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import startGame from '../api/startGame'
import { ResponseStartGame } from '../types/interfaces';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('startGame', () => {
  it('Return 200 Success', async () => {
    const mockResult: ResponseStartGame = {
      statusCode: 200,
      message: 'Success',
      startGame: true
    }
    fetchMock.mockResponseOnce(JSON.stringify(mockResult))

    const res = await startGame(true)
    expect(res).toEqual(mockResult)
    expect(fetchMock.mock.calls.length).toEqual(1)
  })

  it('Return 400 Bad Request', async () => {
    const mockResult: ResponseStartGame = {
      statusCode: 400,
      message: 'BAD_REQUEST'
    }
    fetchMock.mockResponseOnce(JSON.stringify(mockResult))

    const res = await startGame(true)
    expect(res).toEqual(mockResult)
    expect(fetchMock.mock.calls.length).toEqual(1)
  })

})
