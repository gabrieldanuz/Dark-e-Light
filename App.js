import React from "react";
import Home from "./src/Home";
import {useColorScheme} from 'react-native'

import {ThemeProvider} from 'styled-components'
import theme from './src/Theme'


export default function App() {
  const deviceTheme = useColorScheme();

  const theme = theme[deviceTheme] || theme.dark

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>

  );
}

