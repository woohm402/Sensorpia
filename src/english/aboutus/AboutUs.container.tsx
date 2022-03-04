import { useRouter } from 'next/dist/client/router';
import AboutUsUI from './AboutUs.presenter';
import { useLanguageContext } from '../../context/language/language';

const AboutUsComponent = () => {
  const { languageData: data } = useLanguageContext();
  const router = useRouter();
  const pageIndex = Number(router.query.item);
  const introPage = 'aboutUsIntroPage';
  const visionPage = 'aboutUsVisionPage';
  return (
    <AboutUsUI
      data={data}
      pageIndex={pageIndex}
      introPage={introPage}
      visionPage={visionPage}
    />
  );
};

export default AboutUsComponent;
