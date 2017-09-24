const uuidv4 = require('uuid/v4');

const { postItem } = require('lib/dynamodb');

async function createUser(body) {
  const item = Object.assign({}, body);
  item.id = uuidv4();

  try {
    const res = await postItem('users', item);
    return {
      code: 'USER_CREATED',
      data: res,
    };
  } catch (e) {
    return {
      code: 'USER_CREATION_ERROR',
      message: 'An error occured while creating user',
    };
  }
}

module.exports = createUser;
