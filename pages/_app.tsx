import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayOut from '../src/layout'
import { LanguageProvider } from '../src/context/language/language'
import { HeaderProvider } from '../src/context/header/header'
import { useRouter } from 'next/dist/client/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname.includes('/admin')) return <Component {...pageProps} />

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
