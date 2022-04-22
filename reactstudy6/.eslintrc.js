module.exports = {
	env: {
		es6: true,
		node: true,
		mocha: true,
		// 让document合理
		browser: true,
	},
	extends: [
		'airbnb-base',
		'eslint:recommended',
		'plugin:react/recommended',
	],
	// package.json的配置一定要对，不然会报错（特指版本
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		// 添加的jsx语法
		ecmaFeatures: {
			jsx: true,
		},
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
