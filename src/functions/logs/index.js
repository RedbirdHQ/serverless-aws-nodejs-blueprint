const asyncHandler = require('lib/async-handler');

async function handler(event) {
  return event;
}

module.exports.asyncHandler = handler;
module.exports.handler = (event, context, callback) =>
  asyncHandler(event, context, callback, handler);
