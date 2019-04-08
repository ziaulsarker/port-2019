const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: [
        "script-loader!baffle/dist/baffle.min.js",
        "style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css",
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!bootstrap/dist/js/bootstrap.min.js",
        "style-loader!css-loader!animate.css/animate.min.css",
        "script-loader!wowjs/dist/wow.min.js",
        "./public/scripts/global.js",
        "./app/app.jsx"
    ],

    output: {
        path: path.resolve(__dirname, "public/scripts"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
                
            },

            {
                test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'url-loader?limit=10000',
            }

        ]
    },
    resolve: {
        alias: {
            Nav: path.resolve(__dirname, 'app/components/nav/nav.jsx'),
            Hero: path.resolve(__dirname, "app/components/hero/hero.jsx"),
            About: path.resolve(__dirname, "app/components/about/about.jsx"),
            Projects: path.resolve(__dirname, "app/components/projects/projects.jsx"),
            Social: path.resolve(__dirname, "app/components/social/social.jsx"),
            Footer: path.resolve(__dirname, "app/components/footer/footer.jsx"),
        }
    }
}

