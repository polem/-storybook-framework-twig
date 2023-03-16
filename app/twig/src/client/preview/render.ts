import { document } from 'global';
import type { RenderContext } from '@storybook/client-api';

const rootElement = document?.getElementById('root');

export default function renderMain({ storyFn }: RenderContext) {
  const storyObj = storyFn();
  const html = fn(storyObj);

  if (!rootElement) {
    throw new Error('Unable to find root element');
  }

  rootElement.innerHTML = html;
}

function fn(storyObj: any) {
  return 'render here';
}