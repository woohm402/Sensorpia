import CareersComponent from '../../src/english/careers/Careers.container'
import { withSessionSsr } from '../../src/lib/withSession'

const Careers = ({ isAdmin }: { isAdmin: boolean }) => {
  return <CareersComponent />
}

export default Careers

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin

  return { props: { isAdmin } }
})