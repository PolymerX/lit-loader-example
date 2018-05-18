module.exports = {
	plugins: [
		require('postcss-easy-import')({
			extensions: [
				'.pcss',
				'.css',
				'.postcss',
				'.sss'
			]
		})
	]
};
