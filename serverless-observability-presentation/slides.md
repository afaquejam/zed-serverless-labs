# Observability in the Serverless World
*Afaque Hussain*

---

## Monitoring the Production Web-App
* CodeBuild automatically deploys the web-app in the production env.
* How to test that the deployed web-app is working from the user's perspective?

----

## Monitoring the Production Web-App
* What's our current process?
* I believe it's manual.
* Do we need automation?

----

## Amazon CloudWatch Synthetics
* Allows us to create cypress like tests which can be run periodically.
* Generate alerts when test fails.
* [Example Canary](https://eu-central-1.console.aws.amazon.com/cloudwatch/home?region=eu-central-1#synthetics:canary/detail/ccl-dev)
* Pricing is reasonable.
  ![synthetics-pricing](img/synthetics-pricing.png)

---
## Dashboard & Alerts
* Services we use
  - API GW, Lambda, DynamoDB, Cognito, S3
  - AWS IoT, Kinesis Firehose
* AWS Lambda Service Console: View metrics by application.

----
## Alerts
* We will come up with important metrics in each service.
* We will configure alerts on those metrics.

----
## Alerts
* `serverless-plugin-aws-alerts` allows to create alerts on lambda function.
* For other services, we will have to configure through CloudFormation (Resources section in `serverless.yml`).

---

## Tracing
* Visualize how service requests traverse different AWS services.
* View service metrics and latencies when the request traverses different services.

----

## X-Ray
* Drawback of the service.
* Example of API GW and DynamoDB streams.
* Example of AWS IoT.

----

## Tracing
* Lumigo
* Datadog

---

## Logging
* Services we use
  - API GW, Lambda, DynamoDB, Cognito, S3
  - AWS IoT, Kinesis Firehose
* Enabled logging on all those services?

----

## Logging
* Current log information.
* Improvement.

----

## Logging
* Capturing and forwarding correlation Ids.

----

## Logging
* Logging guidelines.
* Setting default log level.
* Sampling debug logs.

----

## Logging
* Exporting logs to a different log analysis service?
* If so, then we set log expiration policy as well.

----