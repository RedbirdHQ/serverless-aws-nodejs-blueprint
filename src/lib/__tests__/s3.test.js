const AWS = require('aws-sdk-mock');

const s3 = require('../s3');

const object = JSON.stringify({
  test: 'OK',
});

describe('s3', () => {
  it('should post an object in S3', async () => {
    const expectedResponse = {
      ETag: '"6805f2cfc46c0f04559748bb039d69ae"',
    };
    AWS.mock('S3', 'putObject', (params, callback) => {
      callback(null, expectedResponse);
    });
    const data = await s3.postObject('a_bucket_name', 'a_file_name', object);
    expect(data).toEqual(expectedResponse);
  });

  it('should fail posting an object in S3', async () => {
    AWS.mock('S3', 'putObject', (params, callback) => {
      callback(new Error('INTERNAL_ERROR'), null);
    });
    let e;
    try {
      await s3.postObject('a_bucket_name', 'a_file_name', object);
    } catch (err) {
      e = err;
    }
    expect(e).toBeDefined();
    expect(e).toBeInstanceOf(Error);
  });

  afterEach(() => {
    AWS.restore('S3', 'putObject');
  });
});
