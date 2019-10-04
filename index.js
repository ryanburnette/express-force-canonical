'use strict';

module.exports = function(opts) {
  if (!opts) {
    throw new Error('opts is required');
  }
  if (!opts.chost) {
    throw new Error('opts.chost is required');
  }
  return function(req, res, next) {
    if (opts.chost !== req.header('host')) {
      var rproto = req.headers['x-forwarded-proto'] || req.protocol;
      var proto = opts.proto || rproto;
      var redirectTo = proto + '://' + opts.chost + req.path;
      res.statusCode = 301;
      res.setHeader('Location', redirectTo);
      return;
    }
    next();
  };
};
