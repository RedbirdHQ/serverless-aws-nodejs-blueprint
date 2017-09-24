const asyncHandler = require('../async-handler');

describe('async-handler', () => {
  it('should run a mocked handler and succeed', async () => {
    const mockCallback = jest.fn();
    const expectedData = 'success';
    await asyncHandler({}, {}, mockCallback, async () => expectedData);
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe(null);
    expect(mockCallback.mock.calls[0][1]).toEqual(expectedData);
  });

  it('should run a mocked handler and fail', async () => {
    const mockCallback = jest.fn();
    const expectedError = 'failure';
    await asyncHandler({}, {}, mockCallback, async () => {
      throw new Error(expectedError);
    });
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBeDefined();
    expect(mockCallback.mock.calls[0][0]).toBeInstanceOf(Error);
    expect(mockCallback.mock.calls[0][0].message).toEqual('failure');
    expect(mockCallback.mock.calls[0][1]).toBe(null);
  });
});
