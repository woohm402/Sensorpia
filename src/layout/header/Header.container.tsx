import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import HeaderUI from './Header.presenter'
import { ProductDetails } from './Header.styles'

interface IProps {
  sideBar: any
}

const HeaderComponent = ({ sideBar }: IProps) => {
  const { language, setLanguage } = useContext(GlobalContext)
  const [menu, setMenu] = useState('')
  const [detailMenu, setDetailMenu] = useState(null)
  const data = require(`../../../pages/api/${language}.json`)
  const { isOpen, setIsOpen } = useContext(GlobalContext)
  const router = useRouter()
  useEffect(() => {
    if (isOpen === false) {
      setDetailMenu(null)
      setMenu('')
    }
  }, [router.pathname, isOpen, menu])
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
      event.target.id === 'ContactUs' ||
      event.target.id === 'Careers'
    ) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  const onClickMenu = (event: any) => {
    if (event.target.id === 'Home') {
      router.push('/')
      setIsOpen(false)
      setDetailMenu(null)
    } else if (event.target.id === 'Product') {
      router.push({
        pathname: '/products',
        query: { item: 0, keyword: 'Normal' },
      })
      setIsOpen(false)
      setDetailMenu(null)
    } else if (event.target.id === 'Application') {
      router.push({ pathname: '/application', query: { item: 0 } })
      setIsOpen(false)
      setDetailMenu(null)
    } else if (event.target.id === 'AboutUs') {
      router.push({ pathname: '/aboutUs', query: { item: 0 } })
      setIsOpen(false)
      setDetailMenu(null)
    } else if (event.target.id === 'ContactUs') {
      router.push('/contactUs')
      setIsOpen(false)
      setDetailMenu(null)
    } else if (event.target.id === 'Careers') {
      router.push('/careers')
      setIsOpen(false)
      setDetailMenu(null)
    }
  }

  const onMouseOverDetailMenu = (event: any) => {
    setDetailMenu(event.target.id)
  }

  const onClickLogo = () => {
    router.push('/')
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
      onClickLogo={onClickLogo}
      sideBar={sideBar}
      onClickMenu={onClickMenu}
    ></HeaderUI>
  )
}

export default HeaderComponent
