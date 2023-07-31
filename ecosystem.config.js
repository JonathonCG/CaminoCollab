module.exports = {
    apps : [{
        name: "assistant",
        script: "serve ./elcamino/client/build",
        args: '-s',
        watch: true,
        env: {
            PM2_SERVE_PATH: '.',
            PM2_SERVE_PORT: 3000
        }
      }, {
        name: "api",
        script: "./elcamino/server/index.js",
        watch: true,
        env: {
            NODE_ENV: "production",
        }
    }]
}