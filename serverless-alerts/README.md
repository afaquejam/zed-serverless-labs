# Serverless Alerts
An example project which demonstrates setting up alarms on lambda metrics.

## Running Instructions
* Install dependencies: `yarn install`.
* Specify your email in the `serverless.yml` file.
* Deploy the service: `sls deploy`.
* Make a GET request to the HTTP endpoint which the service creates.
* Wait for a minute and you will receive alerts.
* For more advanced alarms definitions, [read this](https://github.com/ACloudGuru/serverless-plugin-aws-alerts).