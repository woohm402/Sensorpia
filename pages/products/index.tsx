import ProductComponent from '../../src/english/product/Product.container'
import { withSessionSsr } from '../../src/lib/withSession'

const Product = ({ isAdmin }: { isAdmin: boolean }) => {
  return <ProductComponent />
}

export default Product

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin

  return { props: { isAdmin } }
})
