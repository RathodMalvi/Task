import { createProxyMiddleware } from 'http-proxy-middleware';

const proxyConfig = (app) => {
  app.use(
    '/api', // Prefix for your API calls
    createProxyMiddleware({
      target: 'https://api-dev.wogom.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the /api prefix when forwarding the request
      },
    })
  );
};

export default proxyConfig;