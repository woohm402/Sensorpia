import ContactUsUI from './ContactUs.presenter';
import { useLanguageContext } from '../../context/language/language';

const ContactUsComponent = () => {
  const { languageData: data } = useLanguageContext();
  return <ContactUsUI data={data} />;
};

export default ContactUsComponent;
