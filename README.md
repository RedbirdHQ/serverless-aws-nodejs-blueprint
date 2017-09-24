# Serverless AWS Node.js blueprint

## Getting started
### Install
```bash
npm install
```

### Customize environment variables
```bash
cp serverless.env.yml.dist serverless.env.yml
```
Then open `serverless.env.yml` and adapt to your environment.

### Usage
## Run locally
```bash
FUNC=users npm run local
FUNC=logs npm run local
```

## Deploy
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

## TODO
- Code `logs` and `users` functions
- Configure DynamoDB local and S3 local
- Making multiple services work together with shared resources
