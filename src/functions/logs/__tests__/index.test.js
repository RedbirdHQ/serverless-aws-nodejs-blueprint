const logs = require('..');

describe('logs', () => {
  it('should run `logs` handler and succeed', async () => {
    const expectedData = {};
    const data = await logs.asyncHandler({}, {});
    expect(data).toEqual(expectedData);
  });

  it('should run `logs` handler and fail', async () => {
    try {
      await logs.asyncHandler({}, {}); // TODO give failing data
    } catch (e) {
      expect(e).toBeDefined();
      expect(e).toBeInstanceOf(Error);
    }
  });
});
