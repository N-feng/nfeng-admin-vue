// vue.config.js
module.exports = {
    // 选项...
    devServer: {
        proxy: {
            '/auth': {
                target: 'http://0.0.0.0:3000',
                ws: true,
                changeOrigin: true,
            },
            '/admin': {
                target: 'http://0.0.0.0:3000',
                ws: true,
                changeOrigin: true,
            },
            '/global': {
                target: 'http://0.0.0.0:3000',
                ws: true,
                changeOrigin: true,
            },
        },
    },
}
