import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Libraries',
      items: [
        'libraries/navigation',
        'libraries/animation',
        'libraries/gestures',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/animated-header',
        'examples/gesture-carousel',
      ],
    },
  ],
};

export default sidebars;

