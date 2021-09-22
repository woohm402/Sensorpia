import { useState } from 'react'
import MainUI from './Main.presenter'

const MainComponent = () => {
  const data = require('../../../pages/api/en.json')
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
    ></MainUI>
  )
}

export default MainComponent
