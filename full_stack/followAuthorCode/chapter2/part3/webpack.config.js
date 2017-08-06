/**
 * Created by sf on 2017/8/6.
 */

var path = require('path');
module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
