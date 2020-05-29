'use strict';

module.exports = function (opts) {
  if (!opts) {
    throw new Error('opts is required');
  }
  if (!opts.host) {
    throw new Error('opts.host is required');
  }
  opts.statusCode = opts.statusCode || 302;
  if (![300, 301, 302, 303, 307, 308].includes(opts.statusCode)) {
    throw new Error('opts.statusCode must be a redirect code');
  }
  return function (req, res, next) {
    var conditionsMet = false;
    if (opts.host !== req.header('Host')) {
      conditionsMet = true;
    }
    var reqProto = req.header('X-Forwarded-Proto') || req.protocol;
    if (reqProto !== 'https') {
      conditionsMet = true;
    }
    if (conditionsMet) {
      res.statusCode = opts.statusCode;
      var redirectTo = 'https://' + opts.host + req.path;
      res.setHeader('Location', redirectTo);
      res.end();
      return;
    }
    next();
  };
};
