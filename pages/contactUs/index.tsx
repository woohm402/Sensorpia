import ContactUsComponent from '../../src/english/contactus/ContactUs.container';
import { withSessionSsr } from '../../src/lib/withSession';
import { useAdminContext } from '../../src/context/admin/admin';
import { useEffect } from 'react';

const ContactUs = ({ isAdmin }: { isAdmin: boolean }) => {
  const { setIsAdmin } = useAdminContext();

  useEffect(() => {
    setIsAdmin(isAdmin);
  }, [isAdmin, setIsAdmin]);

  return <ContactUsComponent />;
};

export default ContactUs;

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin;

  return { props: { isAdmin } };
});
