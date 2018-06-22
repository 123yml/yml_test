module.exports = {
	entry : "./js/runoob1.js", // 入口
	output : { // 出口
		path : __dirname + "/dist/",
		filename : "bundle.js"
	},
	module: {
        loaders: [ // Loader
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};

