import React from 'react';
import { createTheme, ThemeOptions } from '@mui/material/styles';

export const colors = {
  primary: '#35495E',
  secondary: '#41B883',
  warning: '#E6A800',
  black: '#000000',
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    header: React.CSSProperties;
    title: React.CSSProperties;
    text: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    header: React.CSSProperties;
    title: React.CSSProperties;
    text: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading: true;
    title: true;
    text: true;
  }
}

export const mainTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    warning: {
      main: colors.warning,
    },
    text: {
      primary: colors.black,
    },
  },
  typography: {
    header: {
      fontSize: '25px',
      fontWeight: 'bold',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    text: {
      fontSize: '18px',
      fontWeight: 'normal',
    },
  },
});
