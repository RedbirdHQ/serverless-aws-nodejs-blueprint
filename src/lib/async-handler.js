async function asyncHandler(event, context, callback, handler) {
  let err = null;
  let data = null;
  try {
    data = await handler(event, context);
  } catch (e) {
    err = e;
  }
  callback(err, data);
}

module.exports = asyncHandler;
