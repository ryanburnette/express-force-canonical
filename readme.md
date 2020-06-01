# [express-force-canonical](https://github.com/ryanburnette/express-force-canonical)

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/express-force-canonical)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/express-force-canonical)

Express.js middleware to force HTTPS and a canonical host. It works behind a
proxy, and on Heroku.

## Usage

It may not work reliably unless it is the first Middleware declared.

```js
if (process.env.NODE_ENV === 'production') {
  var forceCanonical = require('@ryanburnette/express-force-canonical');
  app.use(
    forceCanonical({
      host: 'www.myawesomewebiste.com', // required host
      statusCode: 308 // optional statusCode, defaults to 308
    })
  );
}
```
