module.exports = {
	siteName: 'Gridsome NetlifyCMS Starter Kit',
	siteUrl: 'https://www.gridsome.org',
	siteDescription: 'Gridsome is a blazing-fast static site generator...',
	titleTemplate: `%s - Gridsome`,
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/*.md',
				typeName: 'BlogPost',
				route: '/blog/:slug'
			}
		},
		// {
		// 	use: '@gridsome/source-filesystem',
		// 	options: {
		// 		path: 'data/*.yml',
		// 	}
		// }
	]
}
