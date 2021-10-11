import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import ApplicationUI from './Application.presenter'

const ApplicationComponet = () => {
  const { menu, setMenu, language } = useContext(GlobalContext)
  const [finalRandomImage, setFinalRandomImage] = useState('')
  const data = require(`../../../pages/api/${language}.json`)
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/application') {
      if (language === 'en') {
        setMenu('Defense')
      } else if (language === 'kor') {
        setMenu('국방')
      }
    }
    function RandomImage() {
      const Images = [
        data.applications.randomImages[0],
        data.applications.randomImages[1],
      ]
      const RandomImageOne = Math.floor(Math.random() * Images.length)
      const RandomImage = Images[RandomImageOne]
      setFinalRandomImage(RandomImage)
    }
    RandomImage()
  }, [router.pathname, setMenu, language, data.applications.randomImages])
  return (
    <ApplicationUI
      finalRandomImage={finalRandomImage}
      menu={menu}
      data={data}
    />
  )
}

export default ApplicationComponet
