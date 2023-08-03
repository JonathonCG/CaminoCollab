module.exports = {
    apps : [{
        name: "assistant",
        script: "serve",
        cwd: './elcamino/client',
        watch: true,
        env: {
            PM2_SERVE_PATH: './elcamino/client/build',
            PM2_SERVE_PORT: 3000,
            PM2_SERVE_SPA: 'true'
        }
      }, {
        name: "api",
        script: "./elcamino/server/index.js",
        cwd: "./elcamino/server",
        watch: true,
        env: {
            NODE_ENV: "production",
        }
    }]
}