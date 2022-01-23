import ContactUsComponent from '../../src/english/contactus/ContactUs.container'
import { withSessionSsr } from '../../src/lib/withSession'

const contactUs = ({ isAdmin }: { isAdmin: boolean }) => {
  return <ContactUsComponent />
}

export default contactUs

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin

  return { props: { isAdmin } }
})
