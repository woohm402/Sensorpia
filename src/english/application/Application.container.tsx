import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import ApplicationUI from './Application.presenter'
import { ApplicationMenuItems } from './ApplicationMenuItems'

const ApplicationComponent = () => {
  const { language } = useContext(GlobalContext)
  const [finalRandomImage, setFinalRandomImage] = useState('')
  const data = require(`../../../pages/api/${language}.json`)
  const { query }: { query: { item?: string } } = useRouter()
  useEffect(() => {
    function RandomImage() {
      const Images = [
        data.applications.randomImages[0],
        data.applications.randomImages[1],
      ]
      const randomIndex = Math.floor(Math.random() * Images.length)
      const RandomImage = Images[randomIndex]
      setFinalRandomImage(RandomImage)
    }

    RandomImage()
  }, [language, data.applications.randomImages])
  return (
    <ApplicationUI
      finalRandomImage={finalRandomImage}
      item={query.item || ApplicationMenuItems.defense}
      data={data}
    />
  )
}

export default ApplicationComponent
