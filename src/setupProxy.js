const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(proxy("/api/*", { target: "https://mernbackendtec.herokuapp.com/" }));
  };

