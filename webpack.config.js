const path = require("path");

module.exports = {
    mode: "development",
    entry: {
       app:  "./app/app.jsx"
    },
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
                
            }
        ]
    },
    resolve: {
        alias: {
            NavigationContact: path.resolve(__dirname, 'app/components/nav/nav-contact.jsx'),
            ContactForm: path.resolve(__dirname, 'app/components/contact-form/contact-form.jsx'),
        }
    }
}

