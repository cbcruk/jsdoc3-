import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config = {
  title: 'Use JSDoc',
  tagline: '',
  url: 'https://jsdoc3.vercel.app',
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
      /**
       * @type {import('@docusaurus/preset-classic').Options}
       */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-ZVZXBXRLX7',
          anonymizeIP: true,
        },
      },
    ],
  ],
} satisfies Config

module.exports = config
