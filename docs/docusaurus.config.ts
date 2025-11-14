import { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Awesome React Native Catalog',
  tagline: 'A comprehensive catalog of React Native libraries and resources',
  url: 'https://ubiiii.github.io',
  baseUrl: '/awesome-react-native-catalog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'ubiiii',
  projectName: 'awesome-react-native-catalog',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Utkarsh Lubal.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'RN Catalog',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Libraries',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://awereactnative.com',
          label: 'AweReactNative',
          position: 'right',
        },
        {
          href: 'https://github.com/ubiiii/awesome-react-native-catalog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'AweReactNative.com',
              href: 'https://awereactnative.com',
            },
            {
              label: 'Author Profile',
              href: 'https://awereactnative.com/author/utkarsh-lubal/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ubiiii/awesome-react-native-catalog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Utkarsh Lubal. Built with Docusaurus.`,
    },
  },
};

export default config;

