const { defineConfig } = require("@vue/cli-service")
const { resolve } = require("path")
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.resolve.alias.set("@", resolve("src"))
    },
})
