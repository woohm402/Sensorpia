import { useRouter } from 'next/dist/client/router';
import ApplicationUI from './Application.presenter';
import { useLanguageContext } from '../../context/language/language';

const ApplicationComponent = () => {
  const { languageData: data } = useLanguageContext();
  const router = useRouter();
  const pageIndex = Number(router.query.item);
  return <ApplicationUI data={data} pageIndex={pageIndex} />;
};

export default ApplicationComponent;
