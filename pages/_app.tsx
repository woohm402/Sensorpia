import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayOut from '../src/layout'
import { createContext, useState } from 'react'
import { LanguageProvider } from '../src/context/language/language'

export const GlobalContext = createContext({
  isOpen: false,
  setIsOpen: (_: any) => {},
})

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <GlobalContext.Provider value={{ isOpen, setIsOpen }}>
      <LanguageProvider>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </LanguageProvider>
    </GlobalContext.Provider>
  )
}
export default MyApp
