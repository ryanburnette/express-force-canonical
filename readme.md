# [express-force-canonical][1]

Express.js middleware to force HTTPS and a canonical host. It works behind a
proxy, and on Heroku.

## Usage

It may not work reliably unless it is the first Middleware added.

```js
if (process.env.NODE_ENV === 'production') {
  var forceCanonical = require('@ryanburnette/express-force-canonical');
  app.use(
    forceCanonical({
      // host (required)
      host: 'www.myawesomewebsite.com',
      // redirect status code (optional, defaults to 308)
      statusCode: 308
    })
  );
}
```

## Installation

```bash
npm install ryanburnette/express-force-canonical
```

[1]: https://github.com/ryanburnette/express-force-canonical
