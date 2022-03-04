import ApplicationComponent from '../../src/english/application/Application.container';
import { withSessionSsr } from '../../src/lib/withSession';
import { useAdminContext } from '../../src/context/admin/admin';
import { useEffect } from 'react';

const Application = ({ isAdmin }: { isAdmin: boolean }) => {
  const { setIsAdmin } = useAdminContext();

  useEffect(() => {
    setIsAdmin(isAdmin);
  }, [isAdmin, setIsAdmin]);

  return <ApplicationComponent />;
};

export default Application;

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin;

  return { props: { isAdmin } };
});
