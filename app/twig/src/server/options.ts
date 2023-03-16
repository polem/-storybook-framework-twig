import { LoadOptions } from '@storybook/core-common';
import { sync } from 'read-pkg-up';

export default {
  packageJson: sync({ cwd: __dirname })?.packageJson || {
    name: 'storybook-framework-twig',
    version: '1.0.0',
  },
  framework: 'twig',
  frameworkPresets: [require.resolve('./framework-preset-twig')],
} as LoadOptions;