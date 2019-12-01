export const colors = {
  black: '#111111',
  grey: '#C4C4C4',
  greys: {
    dark: '#222222',
    medium: '#333333',
    light: '#F0F5F6',
    veryLight: '#FCFDFE',
    disabled: '#C5D3D9',
  },
  white: '#FFF',
  transparent: 'transparent',
  blue: '#489FCC',
  blues: {
    dark: '#1872A0',
    light: '#DEF0FA',
  },
  yellow: '#C6B72C',
  yellows: {
    light: 'rgba(255, 245, 2, 0.2)',
  },
  orange: '#FFBF42',
  green: '#31AE5C',
  greens: {
    light: '#E5FFEE',
  },
  red: '#EA6B6B',
  reds: {
    dark: '#DE3333',
    light: 'rgba(255, 147, 147, 0.25)',
  },
}

export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  fonts: {
    serif: 'Canela, athelas, georgia, times, serif',
    mono: 'iosevka, "Fira Mono", andale',
    sansSerif:
      '-apple-system, BlinkMacSystemFont, roboto, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, noto, "segoe ui", arial, sans-serif',
  },
  borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
  radii: [0, 2, 4, 16, 9999, '100%'],
  shadows: ['0px 5px 20px rgba(0, 0, 0, 0.1)'],
  sizes: [16, 32, 64, 128, 256],
  colors,
}
