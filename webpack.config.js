const path = require("path");
// Path fara a importação para resolver possiveis problemas de importação
const HtmlWebpackPlugin = require("html-webpack-plugin");
// HtmlWebpackPlugin fara a importação do html-webpack-plugin

module.exports = {
    target: "web",
    mode: "development",

    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3000,
        // A porta onde o servidor vai rodar
        open: true,
        // Define se o servidor vai abrir o navegador automaticamente
        liveReload: true,
        // Define se o servidor vai atualizar a página automaticamente
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            favicon: path.resolve("src", "assets", "scissors.svg"),
            // para importar o favicon
        }),
    ],

    module: {
        rules: [{
            test: /\.css$/,
            // Testa se o arquivo é css
            use: ["style-loader", "css-loader"],
            // O css-loader é usado para importar o css
            // O style-loader é usado para adicionar o css ao html
        },],
    },
}