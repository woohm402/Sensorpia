import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import HeaderUI from './Header.presenter';
import { useLanguageContext } from '../../context/language/language';
import { useHeaderContext } from '../../context/header/header';

interface IProps {
  sideBar: any;
}

const HeaderComponent = ({ sideBar }: IProps) => {
  const { language, languageData: data, setLanguage } = useLanguageContext();
  const [menu, setMenu] = useState('');
  const [detailMenu, setDetailMenu] = useState(null);
  const [renderingCount, setRenderingCount] = useState(0);
  const { isOpen, setIsOpen } = useHeaderContext();
  const router = useRouter();
  useEffect(() => {
    if (renderingCount === 0 && router.pathname === '/') {
      setMenu('Home');
      setRenderingCount((prev) => prev + 1);
    }
    if (!isOpen) {
      setDetailMenu(null);
      // setMenu('')
    }
  }, [router.pathname, isOpen, menu, renderingCount]);
  const onClickLanguage = (event: any) => {
    setLanguage(event.target.id);
  };
  const onMouseOverMenu = (event: any) => {
    setMenu(event.target.id);
    if (
      event.target.id === 'Home' ||
      event.target.id === 'Product' ||
      event.target.id === 'Application' ||
      event.target.id === 'AboutUs' ||
      event.target.id === 'ContactUs' ||
      event.target.id === 'Careers'
    ) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const onMouseLeaveMenu = () => {
    setMenu('');
  };

  const onClickMenu = (event: any) => {
    if (event.target.id === 'Home') {
      router.push('/');
      setIsOpen(false);
      setDetailMenu(null);
    } else if (event.target.id === 'Product') {
      router.push({
        pathname: '/products',
        query: { item: 0, keyword: 'Normal' },
      });
      setIsOpen(false);
      setDetailMenu(null);
    } else if (event.target.id === 'Application') {
      router.push({ pathname: '/application', query: { item: 0 } });
      setIsOpen(false);
      setDetailMenu(null);
    } else if (event.target.id === 'AboutUs') {
      router.push({ pathname: '/aboutUs', query: { item: 0 } });
      setIsOpen(false);
      setDetailMenu(null);
    } else if (event.target.id === 'ContactUs') {
      router.push('/contactUs');
      setIsOpen(false);
      setDetailMenu(null);
    } else if (event.target.id === 'Careers') {
      router.push({ pathname: '/careers', query: { item: 0 } });
      setIsOpen(false);
      setDetailMenu(null);
    }
  };

  const onMouseOverDetailMenu = (event: any) => {
    setDetailMenu(event.target.id);
  };
  const onClickApplicationDetailMenu = (event: any) => {
    if (event.target.id === 'Defense' || event.target.id === '국방') {
      router.push({ pathname: '/application', query: { item: 0 } });
    } else if (
      event.target.id === 'Satellite' ||
      event.target.id === '인공 위성'
    ) {
      router.push({ pathname: '/application', query: { item: 1 } });
    } else if (
      event.target.id === 'Measurement' ||
      event.target.id === '측정 장비'
    ) {
      router.push({ pathname: '/application', query: { item: 2 } });
    }
  };
  const onClickProductDetailMenu = (event: any) => {
    if (event.target.id === '3-axis Flux-gate magnetometer') {
      router.push({
        pathname: '/products',
        query: { item: 0, keyword: 'Normal' },
      });
    } else if (event.target.id === 'Magnetic torquer') {
      router.push({
        pathname: '/products',
        query: { item: 1, keyword: 'torquer' },
      });
    } else {
      router.push({ pathname: '/products', query: { item: 2, keyword: null } });
    }
  };
  const onClickAboutUsDetailMenu = (event: any) => {
    if (
      event.target.id === 'Sensorpia intro.& OurCustomers' ||
      event.target.id === '회사 소개& 주요 고객사'
    ) {
      router.push({
        pathname: '/aboutUs',
        query: { item: 0 },
      });
    } else if (
      event.target.id === 'Vision & History' ||
      event.target.id === '비전 & 회사 이력'
    ) {
      router.push({
        pathname: '/aboutUs',
        query: { item: 1 },
      });
    }
  };
  const onClickCareersDetailMenu = (event: any) => {
    if (event.target.id === '인재상') {
      router.push({ pathname: '/careers', query: { item: 0 } });
    } else if (event.target.id === '인사 제도') {
      router.push({ pathname: '/careers', query: { item: 1 } });
    }
  };
  const onClickLogo = () => {
    router.push('/');
    setMenu('Home');
  };

  return (
    <HeaderUI
      data={data}
      language={language}
      onClickLanguage={onClickLanguage}
      menu={menu}
      onMouseOverMenu={onMouseOverMenu}
      onMouseOverDetailMenu={onMouseOverDetailMenu}
      detailMenu={detailMenu}
      onClickLogo={onClickLogo}
      sideBar={sideBar}
      onClickMenu={onClickMenu}
      onClickApplicationDetailMenu={onClickApplicationDetailMenu}
      onClickProductDetailMenu={onClickProductDetailMenu}
      onClickAboutUsDetailMenu={onClickAboutUsDetailMenu}
      onClickCareersDetailMenu={onClickCareersDetailMenu}
      onMouseLeaveMenu={onMouseLeaveMenu}
    />
  );
};

export default HeaderComponent;
