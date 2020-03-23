# Serverless Logging
* A project which demos serverless logging best practices.

## Pre-requisites
* Install and confiure the following:
  - awscli
  - serverless
  - Sign-up for lumigo and export your token: ` export LUMIGO_TOKEN=tokenhere`
  - Enable API GW logs.
* Install dependencies: `yarn install`
* Install the backend: `serverless deploy`
* Insert data and read from the API.
* Fetch request Id from API GW and query logs from CloudWatch by filtering logs with field correlationIds.