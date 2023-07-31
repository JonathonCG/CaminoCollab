module.exports = {
apps : [{
    name: "assistant",
    script: "serve -s ./elcamino/client/build",
  }, {
    name: "api",
    script: "./elcamino/server/index.js",
    env: {
        NODE_ENV: "production",
    }
  }]
}