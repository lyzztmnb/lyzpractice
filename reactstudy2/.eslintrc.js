module.exports = {
	env: {
		es6: true,
		node: true,
		mocha: true,
		JSX: false,
	},
	extends: 'airbnb-base',
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	root: true,
	rules: {
		'no-tabs': 0,
		indent: [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		quotes: [
			'error',
			'single',
		],
		semi: [
			'error',
			'never',
		],
	},
}
