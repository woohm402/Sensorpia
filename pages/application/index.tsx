import ApplicationComponent from '../../src/english/application/Application.container'
import { withSessionSsr } from '../../src/lib/withSession'

const Application = ({ isAdmin }: { isAdmin: boolean }) => {
  return <ApplicationComponent />
}

export default Application

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin

  return { props: { isAdmin } }
})
