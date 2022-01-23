import AboutUsComponent from '../../src/english/aboutus/AboutUs.container'
import { withSessionSsr } from '../../src/lib/withSession'

const aboutUs = ({ isAdmin }: { isAdmin: boolean }) => {
  return <AboutUsComponent />
}

export default aboutUs

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin

  return { props: { isAdmin } }
})
