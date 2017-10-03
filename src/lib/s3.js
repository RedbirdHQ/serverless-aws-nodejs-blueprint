const AWS = require('lib/aws');

async function postObject(bucketName, filename, content) {
  const s3 = new AWS.S3();
  return s3.putObject({
    Body: content,
    Bucket: bucketName,
    Key: filename,
  }).promise();
}

module.exports = {
  postObject,
};
