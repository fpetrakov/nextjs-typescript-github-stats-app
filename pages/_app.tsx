import '../styles/normalize.css'
import '../styles/variables.css'
import '../styles/global.css'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
