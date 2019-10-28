'use strict';

module.exports = function(opts) {
  if (!opts) {
    throw new Error('opts is required');
  }
  if (!opts.chost) {
    throw new Error('opts.chost is required');
  }
  opts.statusCode = opts.statusCode || 302;
  if (![300, 301, 302, 303, 307, 308].includes(opts.statusCode)) {
    throw new Error('opts.statusCode must be a redirect code');
  }
  return function(req, res, next) {
    if (opts.chost !== req.header('host')) {
      var rproto = req.headers['x-forwarded-proto'] || req.protocol;
      var redirectTo = (opts.proto || rproto) + '://' + opts.chost + req.path;
      res.statusCode = opts.statusCode;
      res.setHeader('Location', redirectTo);
      res.end();
      return;
    }
    next();
  };
};
