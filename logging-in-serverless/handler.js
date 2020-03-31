'use strict';

const { MEASUREMENTS_TABLE } = process.env;
const AWS = require('aws-sdk');
const Log = require('@dazn/lambda-powertools-logger');
const wrap = require('@dazn/lambda-powertools-pattern-basic');
const DynamoDB = require('@dazn/lambda-powertools-dynamodb-client');

const getRandomData = () => Math.round(Math.random() * 100);

module.exports.getMeasurements = wrap(async (event) => {
  Log.debug('Received the following event:', event);

  const params = {
    TableName: MEASUREMENTS_TABLE,
  };

  Log.debug('The dynamodb scan parameters are:', params);
  let dynamoDbResponse;

  try {
    dynamoDbResponse = await DynamoDB.scan(params).promise();
    Log.info('The dynamodb response is', dynamoDbResponse);

    return {
      statusCode: 200,
      body: JSON.stringify(dynamoDbResponse),
    };
  } catch (error) {
    Log.error('Failed to fetch data from dynamodb', error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
});

module.exports.storeMeasurements = wrap(async (event) => {
  Log.info(event);

  const { deviceId } = JSON.parse(event.body);

  const params = {
    TableName: MEASUREMENTS_TABLE,
    Item: {
      deviceId,
      timestamp: Date.now(),
      temperature: getRandomData(),
      lightIntensity: getRandomData(),
      soundIntensity: getRandomData(),
    },
  };

  Log.debug('The dynamodb put parameters are:', params);

  try {
    await DynamoDB.put(params).promise();
    Log.info('The dynamoDb put operation was successful.');

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Measurement stored successfully!',
      }),
    };
  } catch (error) {
    Log.error('Failed to store data in dynamodb', error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
});

module.exports.computeAggregate = wrap(async (event) => {
  /**
   * Since this lambda function is invoked in a batch, each record item
   * will have a logger attribute, which contains correlation Id.
   */
  event.Records.forEach((item) => {
    item.logger.info('Individual record item');
  });

  return {
    statusCode: 200,
  };
});
