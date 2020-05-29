# [express-force-canonical](https://github.com/ryanburnette/express-force-canonical)

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/express-force-canonical)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/express-force-canonical)

Express.js HTTP middleware to force HTTPS and a canonical host. Works behind a
proxy or on Heroku. It enforces HTTPS as well. Oh, and it doesn't actually need
Express.js, works with regular old Node.js HTTP as well.

```js
if (process.env.NODE_ENV === 'production') {
  app.use(
    require('@ryanburnette/express-force-canonical')({
      host: 'www.myawesomewebsite.com'
    })
  );
}
```
