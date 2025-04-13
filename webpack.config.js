const path = require("path");
// Path fara a importação para resolver possiveis problemas de importação

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
    }
}