import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayOut from '../src/layout'
import Head from 'next/head'
import { createContext, useState } from 'react'

export const GlobalContext = createContext({
  isOpen: false,
  setIsOpen: (_: any) => {},
  language: '',
  setLanguage: (_: any) => {},
  menu: '',
  setMenu: (_: any) => {},
})

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [menu, setMenu] = useState('')
  const data = require(`../pages/api/${language}.json`)
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <GlobalContext.Provider
        value={{ isOpen, setIsOpen, language, setLanguage, menu, setMenu }}
      >
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </GlobalContext.Provider>
    </>
  )
}
export default MyApp
