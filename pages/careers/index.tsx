import CareersComponent from '../../src/english/careers/Careers.container';
import { withSessionSsr } from '../../src/lib/withSession';
import { useAdminContext } from '../../src/context/admin/admin';
import { useEffect } from 'react';

const Careers = ({ isAdmin }: { isAdmin: boolean }) => {
  const { setIsAdmin } = useAdminContext();

  useEffect(() => {
    setIsAdmin(isAdmin);
  }, [isAdmin, setIsAdmin]);

  return <CareersComponent />;
};

export default Careers;

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin;

  return { props: { isAdmin } };
});
