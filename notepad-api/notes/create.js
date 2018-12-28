'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const { text, tag } = JSON.parse(event.body);

  if (
    text.length === 0 ||
    typeof text !== 'string' ||
    typeof tag !== 'string'
  ) {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        message: 'Sorry, it looks like you are missing a field.'
      })
    });
    return;
  }

  const params = {
    TableName: 'notes',
    Item: {
      id: uuid.v1(),
      text,
      tag,
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
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(params.Item)
    };
    callback(null, response);
  });
};
