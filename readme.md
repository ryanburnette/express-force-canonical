# [express-force-canonical](https://github.com/ryanburnette/express-force-canonical)

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/express-force-canonical)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/express-force-canonical)

Express or Node.js HTTP middleware to force a canonical host.

Works behind a proxy or on Heroku.

```js
var express = require('express');

var app = express();

if (process.env.NODE_ENV == 'production') {
  app.use(
    require('@ryanburnette/express-force-canonical')({
      chost: 'www.mysite.com',
      proto: 'https'
    })
  );
}
```
