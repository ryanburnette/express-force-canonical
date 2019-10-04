# @ryanburnette/[express-force-canonical][1]

Express or Node.js HTTP middleware to force a canonical host.

Works behind a proxy or on Heroku.

```js
var express = require('express');
var forceCanonicalHost = require('@ryanburnette/force-canonical-host');

var app = express();

if (process.env.NODE_ENV == 'production') {
  app.use(forceCanonicalHost({
    chost: 'www.mysite.com', // required
    proto: 'https' // optional destination proto
  }));
}
```

[1]: https://code.ryanburnette.com/ryanburnette/express-force-canonical
