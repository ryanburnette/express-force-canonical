'use strict';

module.exports = function (req, res, next) {
  var proto = req.headers['x-forwarded-proto'] || req.protocol;
  var host = process.env.CANONICAL_HOST;
  var url = req.url;

  if (!host) { return next(); }

  if (process.env.NODE_ENV != 'production') { return next(); }

  if (req.headers.host !== host) {
    return res.redirect(proto+'://'+host+url);
  }
};
