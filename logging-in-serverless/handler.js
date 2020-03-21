'use strict';

const { MEASUREMENTS_TABLE } = process.env;
const AWS = require('aws-sdk');
const Log = require('@dazn/lambda-powertools-logger');
const wrap = require('@dazn/lambda-powertools-pattern-basic');

module.exports.getMeasurements = wrap(async event => {
  Log.debug('Received the following event:', event)

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: MEASUREMENTS_TABLE,
  };

  Log.debug('The dynamodb scan parameters are:', params);
  let dynamoDbResponse;

  try {
    dynamoDbResponse = await dynamoDb.scan(params).promise();
    Log.info('The dynamodb response is', dynamoDbResponse);

    return {
      statusCode: 200,
      body: JSON.stringify(dynamoDbResponse),
    }
  } catch (error) {
    Log.error('Failed to fetch data from dynamodb', error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    }
  }
});
