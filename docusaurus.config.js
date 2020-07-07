module.exports = {
  title: 'Use JSDoc',
  tagline: '',
  url: 'https://cbcruk.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'cbcruk',
  projectName: 'jsdoc3-',
  themeConfig: {
    navbar: {
      title: 'Use JSDoc',
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © 2011-${new Date().getFullYear()} the contributors to the JSDoc 3 documentation project.`,
    },
    algolia: {
      apiKey: 'd729f128e448823af1aa52956cf8b90f',
      indexName: 'jsdoc3',
      algoliaOptions: {},
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          homePageId: 'index',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
