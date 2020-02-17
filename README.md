# web-front

This is a React app that uses [web-back](https://github.com/mzmudziak/web-back).

## Deploy

This app is deployed via CloudFoundry on IBM Cloud

You can deploy using the IBM Cloud CLI:
```
$ npm install
$ npm run build
$ ibmcloud login
$ ibmcloud target --cf -r eu-gb
$ ibmcloud cf push web-front
```

