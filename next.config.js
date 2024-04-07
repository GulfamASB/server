// next.config.js

module.exports = {
    async headers() {
      return [
        {
          // Set Referrer-Policy header to strict-origin-when-cross-origin
          source: 'https://gsserver.netlify.app',
          headers: [
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
          ],
        },
      ];
    },
  };
  