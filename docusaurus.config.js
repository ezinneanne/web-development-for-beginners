// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Web development for beginners',
  staticDirectories: ['img', 'static'],
  tagline: 'html,css,javascript,web development',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ezinneanne.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/web-development-for-beginners/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ezinneanne', // Usually your GitHub org/user name.
  projectName: 'web-development-for-beginners', // Usually your repo name.
  deploymentBranch: 'new_branch',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //Algolia search
      algolia: {
        // The application ID provided by Algolia
        appId: 'M328T1M59H',
  
        // Public API key: it is safe to commit it
        apiKey: '37ea0f672ab9c89d02995695c722731f',
  
        indexName: 'web-development-for-beginners',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },


      // Replace with your project's social card
      navbar: {
        title: 'Web development for beginners',
        logo: {
          alt: 'Web development Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Social links',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ezinne_anne',
              },
              {
                label: 'Linkedin',
                href: 'https://linkedin.com/in/ezinneanneemilia',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ezinneanne/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Web Development For Beginners. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
