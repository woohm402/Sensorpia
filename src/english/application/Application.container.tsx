import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import ApplicationUI from './Application.presenter'

const ApplicationComponet = () => {
  const { menu, setMenu, language } = useContext(GlobalContext)
  const [finalRandomImage, setFinalRandomImage] = useState('')
  const data = require(`../../../pages/api/${language}.json`)
  const router = useRouter()
  const pageIndex = Number(router.query.item)
  useEffect(() => {
    function RandomImage() {
      if (pageIndex === 0) {
        const Images = [
          data.applications[0].data.mainImage[0],
          data.applications[0].data.mainImage[1],
        ]
        const RandomImageOne = Math.floor(Math.random() * Images.length)
        const RandomImage = Images[RandomImageOne]
        setFinalRandomImage(RandomImage)
      }
    }
    RandomImage()
    console.log(finalRandomImage)
  }, [pageIndex, data.applications])
  return (
    <ApplicationUI
      finalRandomImage={finalRandomImage}
      data={data}
      pageIndex={pageIndex}
    />
  )
}

export default ApplicationComponet
