'use strict';

module.exports = function (opts = {}) {
  if (!opts.host) {
    throw new Error('opts.host is required');
  }
  opts.statusCode = opts.statusCode || 308;
  if (![300, 301, 302, 303, 307, 308].includes(opts.statusCode)) {
    throw new Error('opts.statusCode must be a redirect code');
  }
  return function (req, res, next) {
    if (
      (req.header('X-Forwarded-Proto') || req.protocol) !== 'https' ||
      req.header('Host') !== opts.host
    ) {
      return res.redirect(opts.statusCode, 'https://' + opts.host + req.path);
    }
    next();
  };
};
