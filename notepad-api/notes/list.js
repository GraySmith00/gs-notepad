'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'notes'
};

module.exports.list = (event, context, callback) => {
  dynamoDb.scan(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error('Sorry, we had trouble getting the notes.'));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items)
    };

    callback(null, response);
  });
};
