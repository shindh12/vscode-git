module.exports = {
    devServer : {
        proxy : {
            '/api' : {
                target : "http://70.12.114.162:3000",
                changeOrigin : true,
                pathRewrite : {
                    '^/api' : ''
                }
            }
        }
    }
} 