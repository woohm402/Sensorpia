import { useContext, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import HeaderUI from './Header.presenter'

const HeaderComponent = () => {
  const [language, setLanguage] = useState('en')
  const [menu, setMenu] = useState(null)
  const [detailMenu, setDetailMenu] = useState(null)
  const data = require(`../../../pages/api/${language}.json`)
  const { setIsOpen } = useContext(GlobalContext)

  const onClickLanguage = (event: any) => {
    setLanguage(event.target.id)
  }

  const onMouseOverMenu = (event: any) => {
    setMenu(event.target.id)
    if (
      event.target.id === 'Home' ||
      event.target.id === 'Product' ||
      event.target.id === 'Application' ||
      event.target.id === 'AboutUs' ||
      event.target.id === 'ContactUs'
    ) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  const onMouseOverDetailMenu = (event: any) => {
    setDetailMenu(event.target.id)
  }

  return (
    <HeaderUI
      data={data}
      language={language}
      onClickLanguage={onClickLanguage}
      menu={menu}
      onMouseOverMenu={onMouseOverMenu}
      onMouseOverDetailMenu={onMouseOverDetailMenu}
      detailMenu={detailMenu}
    ></HeaderUI>
  )
}

export default HeaderComponent
