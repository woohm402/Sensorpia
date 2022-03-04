import Login from '../../src/english/login/login';
import { withSessionSsr } from '../../src/lib/withSession';
import { useEffect } from 'react';
import { useAdminContext } from '../../src/context/admin/admin';

const LoginPage = ({ isAdmin }: { isAdmin: true }) => {
  const { setIsAdmin } = useAdminContext();

  useEffect(() => {
    setIsAdmin(isAdmin);
  }, [isAdmin, setIsAdmin]);

  return <Login />;
};

export default LoginPage;

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin;

  if (isAdmin)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  return {
    props: { isAdmin },
  };
});
