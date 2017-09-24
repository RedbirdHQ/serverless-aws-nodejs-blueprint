const AWS = require('aws-sdk-mock');

const dynamodb = require('../dynamodb');

const item = {
  test: 'OK',
};

describe('dynamodb', () => {
  it('should post an item in DynamoDB', async () => {
    AWS.mock('DynamoDB.DocumentClient', 'put', (params, callback) => {
      callback(null, {
        Item: item,
      });
    });
    const data = await dynamodb.postItem('a_table_name', item);
    expect(data).toEqual(item);
  });

  it('should fail posting an item in DynamoDB', async () => {
    AWS.mock('DynamoDB.DocumentClient', 'put', (params, callback) => {
      callback(new Error('INTERNAL_ERROR'), null);
    });
    let e;
    try {
      await dynamodb.postItem('a_table_name', item);
    } catch (err) {
      e = err;
    }
    expect(e).toBeDefined();
    expect(e).toBeInstanceOf(Error);
  });

  afterEach(() => {
    AWS.restore('DynamoDB.DocumentClient', 'put');
  });
});
