import { useRouter } from 'next/dist/client/router';
import SideBarUI from './SideBar.presenter';

const SideBarComponent = () => {
  const router = useRouter();
  const path = router.pathname;
  const buttonName = router.query.keyword;

  const onClickMenu = (event: any) => {
    if (router.pathname === '/products') {
      //
    }
    if (router.pathname === '/application') {
      router.push({ pathname: path, query: { item: Number(event.target.id) } });
    } else if (router.pathname === '/aboutUs') {
      router.push({ pathname: path, query: { item: Number(event.target.id) } });
    } else if (router.pathname === '/careers') {
      router.push({ pathname: path, query: { item: Number(event.target.id) } });
    }
  };
  return <SideBarUI onClickMenu={onClickMenu} buttonName={buttonName} />;
};

export default SideBarComponent;
