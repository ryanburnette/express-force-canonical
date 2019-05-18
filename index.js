'use strict';

module.exports = function (req, res, next) {
  var env = process.env.NODE_ENV;
  if (env !== 'production') { return next(); }
  var proto = req.headers['x-forwarded-proto'] || req.protocol;
  var chost = process.env.CANONICAL_HOST;
  if (!chost) { return next(); }
  var rhost = req.header('host');
  if (chost !== rhost) { return res.redirect(proto+'://'+chost+req.path); }
  next();
};
