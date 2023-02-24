import { createTheme } from '@nextui-org/react';


export const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {
  
        // color assignments
        background: '#060c17',
        backgroundAlpha: 'rgba(8, 26, 59, 0.5)',
        backgroundContrast: '#081a3b',
        primary: '#2774AE',
        secondary: '#702f8a',
        success: '#6ba539',
        warning: '#ffb549',
        error: '#cb333b',
        selection: '#2774ae',
  
        gradient: 'linear-gradient(112deg, #cb333b -63.59%, #702f8a -20.3%, #2774AE 70.46%)',
      }
    }
  })