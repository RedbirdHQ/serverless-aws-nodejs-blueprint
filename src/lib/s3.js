const AWS = require('@redbirdhq/aws-ome-sdk');

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
