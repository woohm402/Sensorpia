import { useRouter } from 'next/dist/client/router';
import FooterComponent from './footer/Footer.container';
import HeaderComponent from './header/Header.container';
import SideBarComponent from './sideBar/SideBar.container';
import Head from 'next/head';
import { useLanguageContext } from '../context/language/language';
import { useHeaderContext } from '../context/header/header';

interface ILayOutProps {
  children: any;
}

const LayOut = ({ children }: ILayOutProps) => {
  const { setIsOpen } = useHeaderContext();
  const onMouseOverBody = () => {
    setIsOpen(false);
  };
  const { languageData: data } = useLanguageContext();
  const router = useRouter();
  const link = ['/application', '/aboutUs', '/products', '/careers'];
  const sideBar = link.includes(router.pathname);

  if (!data) return null;

  if (router.pathname === '/contactUs') {
    return (
      <div>
        <Head>
          <title>{data.title}</title>
        </Head>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <HeaderComponent sideBar={sideBar} />
            <div style={{ margin: '0 auto' }} onMouseOver={onMouseOverBody}>
              {children}
            </div>
          </div>
          <FooterComponent />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>{data.title}</title>
        </Head>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <HeaderComponent sideBar={sideBar} />
          {sideBar ? (
            <div
              style={{
                width: '1100px',
                display: 'flex',
                flexDirection: 'row',
                margin: '0 auto',
              }}
              onMouseOver={onMouseOverBody}
            >
              <SideBarComponent />
              <div style={{ margin: '0 auto' }} onMouseOver={onMouseOverBody}>
                {children}
              </div>
            </div>
          ) : (
            <div style={{ margin: '0 auto' }} onMouseOver={onMouseOverBody}>
              {children}
            </div>
          )}
          <FooterComponent />
        </div>
      </div>
    );
  }
};

export default LayOut;
