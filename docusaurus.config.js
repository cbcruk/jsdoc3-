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
      appId: 'GU9CGVV878',
      apiKey: 'ff2457ab3519907fddfc48648f50baf5',
      indexName: 'jsdoc3',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
