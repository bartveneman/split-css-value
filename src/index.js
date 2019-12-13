const {parse} = require('postcss-values-parser')

module.exports = value => {
	let nodes = []
	let currentNode = []

	parse(value).walk(node => {
		if (node.parent.type === 'root') {
			if (node.type === 'punctuation' && node.parent.type !== 'func') {
				nodes = [...nodes, currentNode.join(' ')]
				currentNode = []
			} else {
				currentNode = [...currentNode, node.toString()]
			}
		}
	})

	return [...nodes, currentNode.join(' ')]
}
