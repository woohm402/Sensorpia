import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../pages/_app'
import AboutUsUI from './AboutUs.presenter'

const AboutUsComponent = () => {
  const { menu, setMenu, language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/aboutUs') {
      if (language === 'en') {
        setMenu('Sensorpia intro.& our customers')
      } else if (language === 'kor') {
        setMenu('회사소개 & 주요 고객사')
      }
    }
  }, [router.pathname, setMenu, language])
  return <AboutUsUI menu={menu} data={data} />
}

export default AboutUsComponent
