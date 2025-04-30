module.exports = {
	plugins: {
		"postcss-pxtorem": {
			rootValue: 16,
			propList: ["*"], // Преобразовывать все свойства
			selectorBlackList: [], // Селекторы, которые нужно исключить из преобразования
			replace: true, // Заменять px на rem
			mediaQuery: true, // Преобразовывать px внутри media queries
			minPixelValue: 0, // Минимальное значение px для преобразования
		},
	},
};
