import type * as Preset from '@docusaurus/preset-classic';
import remarkPluginNpm2Yarn from '@docusaurus/remark-plugin-npm2yarn';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SSML Editor',
  // Set the production url of your site here
  url: 'https://ssml-editor.zmkn.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'ssml-editor', // Usually your repo name.
  organizationName: 'ssml-editor', // Usually your GitHub org/user name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
        translate: false,
      },
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        translate: true,
      },
    },
  },
  presets: [
    [
      'classic',
      {
        blog: {
          remarkPlugins: [[remarkPluginNpm2Yarn, { sync: true }]],
        },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ssml-editor/ssml-editor/tree/master/website/',
          remarkPlugins: [[remarkPluginNpm2Yarn, { sync: true }]],
        },
        pages: {
          remarkPlugins: [[remarkPluginNpm2Yarn, { sync: true }]],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      title: 'SSML Editor',
      logo: {
        alt: 'SSML Editor',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: '/example',
          label: 'Example',
          target: '_blank',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/ssml-editor/ssml-editor',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
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
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ssml-editor/ssml-editor',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ssmleditor.com. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'typescript',
        'javascript',
        'js-extras',
        'javastacktrace',
        'js-templates',
        'css',
        'css-extras',
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
