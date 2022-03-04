import CareersUI from './Careers.presenter';
import { useLanguageContext } from '../../context/language/language';

const CareersComponent = () => {
  const { language, languageData: data } = useLanguageContext();
  return <CareersUI data={data} language={language} />;
};

export default CareersComponent;
