import { createTheme } from '@nextui-org/react';
import './font.css'

export const theme = createTheme({
    type: "light",
    theme: {
      colors: {
        // color assignments
        white: '#ffffff',
        black: '#101820',
        background: '#ffffff',
        backgroundAlpha: 'rgba(221, 229, 237, 0.8)',
        backgroundContrast: '#dde5ed',
        foreground: '$black',
        primary: '#2774ae',
        secondary: '#702f8a',
        success: '#6ba539',
        warning: '#ffb549',
        error: '#91040b',
        selection: '#2774ae',
        grey: '#8d8f8e',
  
        gradient: 'linear-gradient(211deg, #ffb549 -3%, #2774AE 70.46%)',
      },
      fonts: {
        sans: 'Open Sans',
        mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'"
      }
    }
  })
