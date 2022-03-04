import FooterUI from './Footer.presenter';
import { useLanguageContext } from '../../context/language/language';

const FooterComponent = () => {
  const { languageData: data } = useLanguageContext();
  return <FooterUI data={data} />;
};

export default FooterComponent;
