const asyncHandler = require('lib/async-handler');
const createUser = require('./create-user');
const log = require('./log');

async function handler(event) {
  let data = null;
  switch (event.action) {
    case 'users-post':
      data = await createUser(event.params.body);
      break;
    default:
      data = {
        message: `Action ${event.action} is not supported`,
        code: 'ACTION_NOT_DEFINED',
      };
  }
  await log(event.action, event.params, data);
  return data;
}

module.exports.asyncHandler = handler;
module.exports.handler = (event, context, callback) =>
  asyncHandler(event, context, callback, handler);
