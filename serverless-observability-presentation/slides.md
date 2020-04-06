# Observability in the Serverless World
*Afaque Hussain*

---

## Monitoring the Production Web-App

* The CI/CD automatically deploys the web-app in the production env.
* How to test that the deployed web-app is working correctly from the end-user's perspective?
* How to find out if our web-app stops working, before our customers find that and report it?

----

## Monitoring the Production Web-App

* How do we do it now?
* Do we need automation?

----

## Amazon CloudWatch Synthetics

* Allows us to create Cypress-like tests which can be run periodically.
* Generate alerts when test fails.
* [Example Canary](https://eu-central-1.console.aws.amazon.com/cloudwatch/home?region=eu-central-1#synthetics:canary/detail/ccl-dev)
* Pricing is reasonable.
  ![synthetics-pricing](img/synthetics-pricing.png)

---

## Dashboard & Alerts

* AWS services we use:
  - Cognito, API Gateway, Lambda
  - DynamoDB, S3
  - AWS IoT, Kinesis Firehose
* AWS Lambda Service Console: Applications View
  - View metrics of AWS services used in each of our application service.

----

## Alerts

* We will come up with important metrics which we'd like to monitor in each AWS service we use.
* We will configure alerts on those metrics.

----

## Alerts

* `serverless-plugin-aws-alerts` allows to create alerts on lambda metrics.
* For other services, we will have to configure through CloudFormation (Resources section in `serverless.yml`).

---

## Tracing

* Visualize how service requests traverse different AWS services.
* View service metrics and latencies when the request traverses different services.

----

## X-Ray

Let's see how X-Ray traces this example service:
![architecture](img/serverless-logging.png)

----

## X-Ray
![x-ray-map](img/tracing-xray-apigw.png)

----

## X-Ray

Let's see how X-Ray traces this example service:
![architecture](img/aws-iot-firehose-s3.png)

----


## X-Ray
![x-ray-map](img/tracing-aws-iot-x-ray.png)

----

## Lumigo

![lumigo-map](img/tracing-in-lumigo.png)

---

## Lumigo

![lumigo-map](img/tracing-lumigo-view-request-response.png)

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

---

## Kiitos