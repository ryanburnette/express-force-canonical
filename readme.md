# @ryanburnette/[express-force-canonical][1]

Force HTTPS in Express on staging and production environments. Takes into
account that the app may be running behind a proxy or on Heroku.

```javascript
var express = require('express');
var forceCanonical = require('@ryanburnette/express-force-canonical');

var app = express();

process.env.CANONICAL_HOST = 'www.mysite.com';

app.use(forceCanonical);
```

[1]: https://code.ryanburnette.com/ryanburnette/express-force-canonical
