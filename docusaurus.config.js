// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '컨텐츠 소개',
  tagline: '개발자, 알고리즘, iOS, Spring, 프로젝트, 이민, 해외취업',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'davidyoon891122', // Usually your GitHub org/user name.
  projectName: 'DocusaurusSample', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/blog',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: process.env.trackingID,
          anonymizeIP: true,
        }
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Davidyoon Tech Blog',
        logo: {
          alt: 'My Site Logo',
          src: 'img/blogLogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'resume',
            position: 'left',
            label: 'Resume',
          },
          {
            type: 'docSidebar',
            sidebarId: 'posts',
            posision: 'left',
            label: 'Posts'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'dreamtodo',
            position: 'right',
            label: 'DreamTodo'
          },
          {
            href: 'https://github.com/davidyoon891122',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
        exclude: ['/docs/**'],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Resume',
                to: '/docs/resume',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/davidyoon891122',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DavidYoon's Blog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: process.env.ALGORIA_APP_ID,
        apiKey: process.env.ALGORIA_SEARCH_API_KEY,
        indexName: process.env.ALGORIA_INDEX_NAME,
        contextualSearch: true,
      },
      googleAdsense: {
        dataAdClient: 'ca-pub-3441374360512105',
      },

      plugins: ['docusaurus-plugin-google-adsense']
    }),
    
};

module.exports = config;
