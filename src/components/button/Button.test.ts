import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { test, expect, describe } from 'vitest';
import Button from './Button.astro';
import RightArrowSvg from '../../assets/icons/arrow-right.svg';

describe('Button', () => {
  test('should render a button with provided slot content', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {
      slots: {
        default: 'Click me',
      },
    });

    // Using regex to check result as Astro components generate random IDs
    expect(result).toMatch(/<button.*>Click me<\/button>/);
  });

  test('should render provided icon inside button', async () => {
    const container = await AstroContainer.create();

    const result = await container.renderToString(Button, {
      props: {
        icon: 'arrow-right',
      },
      slots: {
        default: 'Click me',
      },
    });

    expect(result).toMatch(/<button.*>Click me.*<svg.*>*.<\/svg>/);
  });
});