import { Router, useRouter } from 'next/dist/client/router'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import MainUI from './Main.presenter'

const MainComponent = () => {
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  const [translate, setTranslate] = useState(0)
  const router = useRouter()
  const onClickSliderNext = () => {
    if (translate === -3300) {
      setTranslate(0)
    } else {
      setTranslate((prev) => prev - 1100)
    }
  }
  const onClickSliderPrevious = () => {
    if (translate === 0) return
    setTranslate((prev) => prev + 1100)
  }
  const onClickProductDetails = (event: any) => {
    if (Number(event.target.id) === 0) {
      router.push({
        pathname: '/products',
        query: { item: Number(event.target.id), keyword: 'Normal' },
      })
    } else if (Number(event.target.id) === 1) {
      router.push({
        pathname: '/products',
        query: { item: Number(event.target.id), keyword: 'Satellite' },
      })
    } else if (Number(event.target.id) === 2) {
      router.push({
        pathname: '/products',
        query: { item: Number(event.target.id), keyword: 'Defense' },
      })
    }
  }

  const onClickApplicationsDetails = (event: any) => {
    router.push({
      pathname: '/application',
      query: { item: Number(event.target.id) },
    })
  }

  const onClickAboutUsDetails = (event: any) => {
    router.push({
      pathname: '/aboutUs',
      query: { item: Number(event.target.id) },
    })
  }

  const onClickCareersDetails = (event: any) => {
    router.push({
      pathname: '/careers',
      query: { item: Number(event.target.id) },
    })
  }

  return (
    <MainUI
      data={data}
      onClickSliderNext={onClickSliderNext}
      translate={translate}
      onClickSliderPrevious={onClickSliderPrevious}
      language={language}
      onClickProductDetails={onClickProductDetails}
      onClickApplicationDetails={onClickApplicationsDetails}
      onClickAboutUsDetails={onClickAboutUsDetails}
      onClickCareersDetails={onClickCareersDetails}
    ></MainUI>
  )
}

export default MainComponent
