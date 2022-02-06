import type { Theme } from "@emotion/react";

export function resolveColor(theme: Theme, colorName?: string, defaultColorName: string = "primary"): string {
  if(colorName && isExplicitColor(colorName)) return colorName;
  const c = colorName ? theme.colors[colorName] : theme.colors[defaultColorName];
  return c || '#ccc';
}
function isExplicitColor(colorName: string) {
  const starts = ['#', 'hsla', 'rgba'];
  for (const s of starts) {
    if(colorName.startsWith(s))
      return true;
  }
  return false;
}

