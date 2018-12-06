// vue.config.js
module.exports = {
    // 选项...
    devServer: {
        proxy: {
            '/auth': {
                target: 'http://0.0.0.0:3000',
                changeOrigin: true
            },
            '/admin': {
                target: 'http://0.0.0.0:3000',
                changeOrigin: true
            }
        }
    }
};