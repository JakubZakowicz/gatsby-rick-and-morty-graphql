import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: {
      'html, body': {
        background: '#24282F',
        color: 'white',
        height: '100vh',
      },
    },
  },
  semanticTokens: {
    colors: {
      yellow: '#FF9E0C',
      gray: '#3C3E44',
      black: '#24282F',
      lightgray: '#9E9E9E',
    },
  },
  variants: {
    shadow: { boxShadow: '0px 12px 40px 8px rgba(0, 0, 0, 0.25);' },
  },
};

export default extendTheme(theme);
