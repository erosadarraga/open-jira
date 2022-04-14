import type { AppProps } from 'next/app'
import { UiProvider } from '../context/ui';
import { darkTheme, lightTheme } from '../themes';
import { EntriesProvider } from '../context/entries/EntriesProvider';
import { CssBaseline, ThemeProvider } from '@mui/material'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UiProvider >
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UiProvider>
    </EntriesProvider>
  )
}


export default MyApp
