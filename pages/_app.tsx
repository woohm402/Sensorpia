import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayOut from '../src/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const data = require('./api/en.json')
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </>
  )
}
export default MyApp
