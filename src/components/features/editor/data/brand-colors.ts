import * as simpleIcons from 'simple-icons';

/**
 * NOTE: verify this against your installed simple-icons version before
 * trusting it in production - the package's export shape has changed
 * across major versions. Confirm `si` + PascalCase(slug) actually resolves
 * to an object with a `.hex` property by checking node_modules/simple-icons
 * or running a quick console.log for a few known slugs (e.g. 'react',
 * 'python') before relying on this for every skill.
 */
const exportName = (slug: string) => `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;

export const getBrandColor = (slug: string): string | undefined => {
  const icon = (simpleIcons as Record<string, { hex: string } | undefined>)[exportName(slug)];
  return icon?.hex;
};

// Relative luminance → pick a logo color that's actually readable against
// that specific brand color, instead of assuming white always works.
// (e.g. a pale/light brand color with a white logo would be nearly invisible.)
const hexToLuminance = (hex: string): number => {
  const [r, g, b] = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map((h) => parseInt(h, 16) / 255);
  const [rl, gl, bl] = [r, g, b].map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
};

export const getContrastingLogoColor = (backgroundHex: string): 'black' | 'white' =>
  hexToLuminance(backgroundHex) > 0.5 ? 'black' : 'white';