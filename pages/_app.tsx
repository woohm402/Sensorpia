import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayOut from '../src/layout'
import { LanguageProvider } from '../src/context/language/language'
import { HeaderProvider } from '../src/context/header/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderProvider>
      <LanguageProvider>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </LanguageProvider>
    </HeaderProvider>
  )
}
export default MyApp
