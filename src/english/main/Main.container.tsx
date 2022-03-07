import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

import MainUI from './Main.presenter';
import { useLanguageContext } from '../../context/language/language';
const timer = {};

const MainComponent = () => {
  const { language, languageData: data } = useLanguageContext();
  const [translate, setTranslate] = useState(0);
  const [tempRouter, setTempRouter] = useState('');
  const router = useRouter();
  const sliderMovement = 1100;
  useEffect(() => {
    setTempRouter(router.pathname);
    //@ts-ignore
    timer.temp = setInterval(function () {
      setTranslate((prev) => prev - sliderMovement);
      //@ts-ignore
      clearInterval(timer.temp);
    }, 5000);
    if (translate === -(sliderMovement * 3)) {
      setTranslate(0);
      //@ts-ignore
      clearInterval(timer.temp);
    }
  }, [translate, router.pathname, tempRouter]);

  const onClickSliderNext = () => {
    //@ts-ignore
    clearInterval(timer.temp);
    if (translate === -(sliderMovement * 2)) {
      setTranslate(0);
    } else {
      setTranslate((prev) => prev - sliderMovement);
    }
  };
  const onClickSliderPrevious = () => {
    //@ts-ignore
    clearInterval(timer.temp);
    if (translate === 0) return;
    setTranslate((prev) => prev + sliderMovement);
  };
  const onClickProductDetails = (event: any) => {
    router.push({
      pathname: '/products',
      query: { item: Number(event.target.id) },
    });
  };

  const onClickApplicationsDetails = (event: any) => {
    router.push({
      pathname: '/application',
      query: { item: Number(event.target.id) },
    });
  };

  const onClickAboutUsDetails = (event: any) => {
    router.push({
      pathname: '/aboutUs',
      query: { item: Number(event.target.id) },
    });
  };

  const onClickCareersDetails = (event: any) => {
    router.push({
      pathname: '/careers',
      query: { item: Number(event.target.id) },
    });
  };

  return (
    <MainUI
      data={data}
      onClickSliderNext={onClickSliderNext}
      translate={translate}
      onClickSliderPrevious={onClickSliderPrevious}
      language={language}
      onClickProductDetails={onClickProductDetails}
      onClickApplicationDetails={onClickApplicationsDetails}
      onClickAboutUsDetails={onClickAboutUsDetails}
      onClickCareersDetails={onClickCareersDetails}
    />
  );
};

export default MainComponent;
