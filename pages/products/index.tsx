import ProductComponent from '../../src/english/product/Product.container';
import { withSessionSsr } from '../../src/lib/withSession';
import { useAdminContext } from '../../src/context/admin/admin';
import { useEffect } from 'react';

const Product = ({ isAdmin }: { isAdmin: boolean }) => {
  const { setIsAdmin } = useAdminContext();

  useEffect(() => {
    setIsAdmin(isAdmin);
  }, [isAdmin, setIsAdmin]);

  return <ProductComponent />;
};

export default Product;

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin;

  return { props: { isAdmin } };
});
