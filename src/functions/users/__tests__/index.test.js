const users = require('..');
const event = require('../event');

describe('users', () => {
  it('should run `users` handler and succeed', async () => {
    const res = await users.asyncHandler(event, {});
    expect(res.code).toEqual('USER_CREATED');
    expect(res.data).toBeDefined();
    expect(res.data).toBeInstanceOf(Object);
  });

  it('should run `users` handler and fail', async () => {
    try {
      await users.asyncHandler({}, {});
    } catch (e) {
      expect(e).toBeDefined();
      expect(e).toBeInstanceOf(Error);
    }
  });
});
