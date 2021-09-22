import { useState } from 'react'
import HeaderUI from './Header.presenter'

const HeaderComponent = () => {
  const [language, setLanguage] = useState('en')
  const [menu, setMenu] = useState(null)
  const data = require(`../../../pages/api/${language}.json`)

  const onClickLanguage = (event: any) => {
    setLanguage(event.target.id)
  }

  const onMouseOverMenu = (event: any) => {
    setMenu(event.target.id)
  }

  return (
    <HeaderUI
      data={data}
      language={language}
      onClickLanguage={onClickLanguage}
      menu={menu}
      onMouseOverMenu={onMouseOverMenu}
    ></HeaderUI>
  )
}

export default HeaderComponent
