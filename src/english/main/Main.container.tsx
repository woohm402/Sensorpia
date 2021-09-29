import { useContext, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import MainUI from './Main.presenter'

const MainComponent = () => {
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  const [translate, setTranslate] = useState(0)
  const onClickSliderNext = () => {
    if (translate === -5760) {
      setTranslate(0)
    } else {
      setTranslate((prev) => prev - 1920)
    }
  }
  const onClickSliderPrevious = () => {
    if (translate === 0) return
    setTranslate((prev) => prev + 1920)
  }

  return (
    <MainUI
      data={data}
      onClickSliderNext={onClickSliderNext}
      translate={translate}
      onClickSliderPrevious={onClickSliderPrevious}
      language={language}
    ></MainUI>
  )
}

export default MainComponent
