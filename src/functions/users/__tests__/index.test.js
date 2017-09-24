const users = require('..');

describe('logs', () => {
  it('should run `users` handler and succeed', async () => {
    const expectedData = {};
    const data = await users.asyncHandler({}, {});
    expect(data).toEqual(expectedData);
  });

  it('should run `users` handler and fail', async () => {
    try {
      await users.asyncHandler({}, {}); // TODO give failing data
    } catch (e) {
      expect(e).toBeDefined();
      expect(e).toBeInstanceOf(Error);
    }
  });
});
