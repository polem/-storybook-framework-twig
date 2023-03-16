import type { Configuration } from 'webpack';
import type { Options } from '@storybook/core-common';

export function webpackFinal(config: Configuration, options: Options) {
  return config;
}