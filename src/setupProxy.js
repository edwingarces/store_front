const { createProxyMiddleware } = require('http-proxy-middleware');
const port = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PORT : process.env.REACT_APP_PORT_DEV;
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:${port}`,
      changeOrigin: true,
    })
  )
}
