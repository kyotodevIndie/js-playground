import '../global.css'

import type { Preview } from '@storybook/react';
// import { colorOptions, shadowOptions } from './consts';
import { Title, Primary, Controls, Stories } from '@storybook/blocks';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)'/i,
        date: /Date'/,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Stories />
          <h3>Playground</h3>
          <Primary />
          <Controls />
        </>
      ),
    },
  },

  // argTypes: {
  //   shadow: {
  //     control: 'select',
  //     options: shadowOptions,
  //   },
  //   color: {
  //     control: 'select',
  //     options: colorOptions,
  //   },
  //   bg: {
  //     control: 'select',
  //     options: colorOptions,
  //   },
  // },

  // decorators: [
  // // Adds theme switching support.
  // // NOTE: requires setting "darkMode" to "class" in your tailwind config
  // withThemeByClassName({
  //   themes: {
  //     light: 'light',
  //     dark: 'dark',
  //   },
  //   defaultTheme: 'light',
  // }),
  // ],
};

export default preview;
