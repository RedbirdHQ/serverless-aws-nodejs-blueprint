# Serverless AWS Node.js blueprint

This blueprint aims to showcase use of **Serverless** framework on **AWS** along with some best practices.
**Function as a Service (FaaS)** allows you to get rid of all server related issues. One of the drawback is that it can be more difficult to develop locally, test, and to incorporate in your CI/CD pipeline. This is why we need the ability to **run locally** all the services we are using. This simple microservice is using 4 AWS services (**Lambda**, **API Gateway**, **S3** and **Dynamo DB**) and for each of them a local alternative is available.

This service will have a `/users POST` method that will post body in `users` DynamoDB table. For each action, a log will be added in `logs` S3 bucket.

## Getting started
```bash
# Install
npm install
# Customize environment variables
cp serverless.env.yml.dist serverless.env.yml
# Then open `serverless.env.yml` and cutomize parameters
```

### Usage
## Run locally
### Start servers
```bash
npm run start # start dynamodb, s3 and api gateway
```

### Run lambda
This will execute `$FUNC` lambda locally with `src/functions/$FUNC/event.js` event.
```bash
FUNC=users npm run local # execute users lambda locally
```

### Run lambda via API Gateway
Simply request `http://localhost:3000/` endpoint with the correct route in Postman or using curl:
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "name": "Miriam Swanson",
  "gender": "female",
  "email": "miriamswanson@exospeed.com",
  "phone": "+1 (966) 541-2436",
  "address": "825 Bushwick Court, Williams, New York, 5435"
}
' "http://localhost:3000/users"
```

## Deploy on AWS
First ensure your `accountId`, `stage` and `region` are well set in `serverless.params.yml`.
Your AWS credentials must also be available (in your `~/.aws/credentials` or environment variables).
```bash
npm run deploy
```

## Test
```bash
npm run test
npm run test --watch
```

## Lint
```bash
npm run lint
npm run lint --fix
```

## See also
- [Serverless](https://github.com/serverless/serverless)
- [Serverless Offline](https://github.com/dherault/serverless-offline)
- [Serverless Webpack](https://github.com/serverless-heaven/serverless-webpack)
- [Serverless DynamoDB local](https://github.com/99xt/serverless-dynamodb-local)
- [Serverless DynamoDB autoscaling](https://github.com/sbstjn/serverless-dynamodb-autoscaling)
- [Serverless S3](https://www.npmjs.com/package/serverless-s3-local)

## TODO
- Publish `aws-ome-sdk` publicly
