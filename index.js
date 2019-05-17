'use strict';

var url = require('url');

module.exports = function (req, res, next) {
  var proto = req.headers['x-forwarded-proto'] || req.protocol;
  var chost = process.env.CANONICAL_HOST;
  var rhost = req.header('host');

  if (!chost) { return next(); }

  if (process.env.NODE_ENV !== 'production') { return next(); }

  if (chost !== rhost) { return res.redirect(proto+'://'+chost+req.path); }

  next();
};
