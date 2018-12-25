'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  if (typeof data.text !== 'string' || typeof data.tag !== 'string') {
    console.error('Validataion Error');
    callback(new Error('Sorry, it looks like you are missing a field.'));
    return;
  }

  const params = {
    TableName: 'notes',
    Item: {
      id: uuid.v1(),
      text: data.text,
      tag: data.tag,
      createdAt: timestamp
    }
  };

  dynamoDb.put(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error('Sorry, we could not create this note.'));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item)
    };
    callback(null, response);
  });
};
