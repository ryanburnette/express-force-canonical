# @ryanburnette/[express-force-canonical][1]

Force a "canonical host" in Express on production environment. Works on Heroku.

```javascript
process.env.NODE_ENV = 'production';
process.env.CANONICAL_HOST = 'www.mysite.com';

var express = require('express');
var forceCanonical = require('@ryanburnette/express-force-canonical');

var app = express();

app.use(forceCanonical);
```

[1]: https://code.ryanburnette.com/ryanburnette/express-force-canonical
