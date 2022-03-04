import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LayOut from '../src/layout';
import { LanguageProvider } from '../src/context/language/language';
import { HeaderProvider } from '../src/context/header/header';
import { useRouter } from 'next/dist/client/router';
import { Toaster } from 'react-hot-toast';
import { AdminProvider } from '../src/context/admin/admin';
import AdminIndicator from '../src/common/AdminIndicator/AdminIndicator';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.includes('/admin'))
    return (
      <>
        <Component {...pageProps} />
        <Toaster />
      </>
    );

  return (
    <AdminProvider>
      <HeaderProvider>
        <LanguageProvider>
          <LayOut>
            <Component {...pageProps} />
            <Toaster />
            <AdminIndicator />
          </LayOut>
        </LanguageProvider>
      </HeaderProvider>
    </AdminProvider>
  );
}
export default MyApp;
