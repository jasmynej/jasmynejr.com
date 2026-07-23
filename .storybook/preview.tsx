import type { Preview } from '@storybook/nextjs-vite'
import '../src/styles/tokens.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'cream',
      values: [
        { name: 'cream', value: '#FDFAF6' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'ink', value: '#1F1B17' },
      ],
    },
  },
};

export default preview;