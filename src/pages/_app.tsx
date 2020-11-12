import theme from '#/theme'
import { ThemeProvider } from '@material-ui/styles'
import { AppProps } from 'next/app'
import React, { FC } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
