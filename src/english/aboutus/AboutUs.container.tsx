import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../pages/_app'
import AboutUsUI from './AboutUs.presenter'

const AboutUsComponent = () => {
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  const router = useRouter()
  const pageIndex = Number(router.query.item)
  const introPage = 'aboutUsIntroPage'
  const visionPage = 'aboutUsVisionPage'
  return (
    <AboutUsUI
      data={data}
      pageIndex={pageIndex}
      introPage={introPage}
      visionPage={visionPage}
    />
  )
}

export default AboutUsComponent
