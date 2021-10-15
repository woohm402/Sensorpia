import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import HeaderUI from './Header.presenter'

interface IProps {
  sideBar: any
}

const HeaderComponent = ({ sideBar }: IProps) => {
  const { language, setLanguage } = useContext(GlobalContext)
  const [menu, setMenu] = useState('')
  const [detailMenu, setDetailMenu] = useState(null)
  const data = require(`../../../pages/api/${language}.json`)
  const { setIsOpen } = useContext(GlobalContext)
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/') {
      setMenu('Home')
    } else if (router.pathname === '/products') {
      setMenu('Product')
    } else if (router.pathname === '/aboutUs') {
      setMenu('AboutUs')
    } else if (router.pathname === '/application') {
      setMenu('Application')
    }
  }, [router.pathname])
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
    } else if (event.target.id === 'Product') {
      router.push({
        pathname: '/products',
        query: { item: 0, keyword: 'Normal' },
      })
      setIsOpen(false)
    } else if (event.target.id === 'Application') {
      router.push({ pathname: '/application', query: { item: 0 } })
      setIsOpen(false)
    } else if (event.target.id === 'AboutUs') {
      router.push('/aboutUs')
      setIsOpen(false)
    } else if (event.target.id === 'ContactUs') {
      router.push('/contactUs')
      setIsOpen(false)
    } else if (event.target.id === 'Careers') {
      router.push('/careers')
      setIsOpen(false)
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
