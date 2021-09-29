import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../pages/_app'
import CareersUI from './Careers.presenter'

const CareersComponent = () => {
  const { menu, setMenu, language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/careers') {
      setMenu('인재상')
    }
  }, [router.pathname, setMenu])
  return <CareersUI data={data} menu={menu} language={language} />
}

export default CareersComponent
