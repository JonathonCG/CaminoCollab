module.exports = {
    apps : [{
        name: "assistant",
        script: "serve",
        cwd: './elcamino/client',
        watch: true,
        env: {
            PM2_SERVE_PATH: 'build',
            PM2_SERVE_PORT: 3000,
            PM2_SERVE_SPA: 'true',
            PM2_SERVE_HOMEPAGE: 'build/index.html'
        }
      }, {
        name: "api",
        script: "./index.js",
        cwd: "./elcamino/server",
        watch: true,
        env: {
            NODE_ENV: "production",
        }
    }]
}