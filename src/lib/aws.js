// https://gist.github.com/ChristopheBougere/4fe9af102063607077990c7403fc1309
/* eslint-disable no-param-reassign */
const AWS = require('aws-sdk');

const DYNAMODB_PORT = process.env.LOCAL_DYNAMODB_PORT || 8000;
const S3_PORT = process.env.LOCAL_S3_PORT || 4569;

const params = {
  dynamodb: {
    region: 'localhost',
    endpoint: `http://localhost:${DYNAMODB_PORT}`,
  },
  s3: {
    s3ForcePathStyle: true,
    endpoint: `http://localhost:${S3_PORT}`,
  },
};

if (process.env.IS_OFFLINE) {
  if (typeof params.dynamodb === 'object') {
    AWS.config.dynamodb = params.dynamodb;
  }
  if (typeof params.s3 === 'object') {
    AWS.config.s3 = params.s3;
  }
}

module.exports = AWS;
