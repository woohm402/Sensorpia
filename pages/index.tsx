import MainComponent from '../src/english/main/Main.container';
import { useAdminContext } from '../src/context/admin/admin';
import { useEffect } from 'react';
import { withSessionSsr } from '../src/lib/withSession';

const Home = ({ isAdmin }: { isAdmin: boolean }) => {
  const { setIsAdmin } = useAdminContext();

  useEffect(() => {
    setIsAdmin(isAdmin);
  }, [isAdmin, setIsAdmin]);

  return <MainComponent />;
};
export default Home;

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin;

  return {
    props: { isAdmin },
  };
});
