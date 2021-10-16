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
      router.push({ pathname: '/careers', query: { item: 0 } })
      setIsOpen(false)
      setDetailMenu(null)
    }
  }

  const onMouseOverDetailMenu = (event: any) => {
    setDetailMenu(event.target.id)
  }
  const onClickApplicationDetailMenu = (event: any) => {
    if (event.target.id === 'Defense') {
      router.push({ pathname: '/application', query: { item: 0 } })
    } else if (event.target.id === 'Satellite') {
      router.push({ pathname: '/application', query: { item: 1 } })
    } else {
      router.push({ pathname: '/application', query: { item: 2 } })
    }
  }
  const onClickProductDetailMenu = (event: any) => {
    if (event.target.id === '3-axis Flux-gate magnetometer') {
      router.push({
        pathname: '/products',
        query: { item: 0, keyword: 'Normal' },
      })
    } else if (event.target.id === 'Magnetic torquer') {
      router.push({
        pathname: '/products',
        query: { item: 1, keyword: 'Satellite' },
      })
    } else {
      router.push({ pathname: '/products', query: { item: 2, keyword: null } })
    }
  }
  const onClickAboutUsDetailMenu = (event: any) => {
    if (event.target.id === 'Sensorpia intro.& OurCustomers') {
      router.push({
        pathname: '/aboutUs',
        query: { item: 0 },
      })
    } else if (event.target.id === 'Vision & History') {
      router.push({
        pathname: '/aboutUs',
        query: { item: 1 },
      })
    }
  }
  const onClickCareersDetailMenu = (event: any) => {}
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
      onClickApplicationDetailMenu={onClickApplicationDetailMenu}
      onClickProductDetailMenu={onClickProductDetailMenu}
      onClickAboutUsDetailMenu={onClickAboutUsDetailMenu}
    ></HeaderUI>
  )
}

export default HeaderComponent
