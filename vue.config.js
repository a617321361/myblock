const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    outputDir: 'dist',
    productionSourceMap: false,
    indexPath: 'index.html',
    filenameHashing: true,
    pages: {
        index: {
            // page 的入口
            entry: "src/main.js",
            // 模板来源
            template: "public/index-prod.html", // 这里用来区分加载那个 html
            // 在 dist/index.html 的输出
            filename: "index.html",
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            // title: "时光机后台管理系统",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ["chunk-vendors", "chunk-common", "index"]
        }
    },
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'axios': 'axios',
            'element-ui': 'ELEMENT'
        }
    },
    //文件打包移除后台打印
    configureWebpack:{
        optimization: {
          minimizer: [
            new UglifyJsPlugin({
              uglifyOptions: {
                compress: {
                  warnings: false,
                  drop_console: true,//console
                  drop_debugger: false,
                  pure_funcs: ['console.log']//移除console
                }
              }
          })
        ]
        }
      }
};