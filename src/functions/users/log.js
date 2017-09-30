const uuidv4 = require('uuid/v4');

const { postObject } = require('lib/s3');

async function log(action, params, response) {
  const bucketName = 'logs';
  const uuid = uuidv4();
  const now = new Date().toISOString();
  const filename = `${now.slice(0, 9).replace(/-/g, '/')}/${action}-${uuid}.json`;
  const logObj = JSON.stringify({
    uuid,
    datetime: now,
    action,
    params,
    response,
  }, null, 2);
  try {
    await postObject(bucketName, filename, logObj);
  } catch (e) {
    console.error('Error while logging:', e); // eslint-disable-line no-console
    console.log(bucketName, filename, logObj); // eslint-disable-line no-console
  }
}

module.exports = log;
