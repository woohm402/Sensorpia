import AboutUsComponent from '../../src/english/aboutus/AboutUs.container';
import { withSessionSsr } from '../../src/lib/withSession';
import { useAdminContext } from '../../src/context/admin/admin';
import { useEffect } from 'react';

const AboutUs = ({ isAdmin }: { isAdmin: boolean }) => {
  const { setIsAdmin } = useAdminContext();

  useEffect(() => {
    setIsAdmin(isAdmin);
  }, [isAdmin, setIsAdmin]);

  return <AboutUsComponent />;
};

export default AboutUs;

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin;

  return { props: { isAdmin } };
});
