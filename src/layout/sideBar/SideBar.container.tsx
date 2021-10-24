import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import SideBarUI from './SideBar.presenter'

const SideBarComponent = () => {
  const { setMenu } = useContext(GlobalContext)
  const router = useRouter()
  const path = router.pathname
  const buttonName = router.query.keyword

  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  const onClickMenu = (event: any) => {
    if (router.pathname === '/products') {
      if (
        event.target.id === 'Normal' ||
        event.target.id === 'Satellite' ||
        event.target.id === 'Defense'
      ) {
        router.push({
          pathname: path,
          query: { item: '0', keyword: event.target.id },
        })
      } else {
        router.push({
          pathname: path,
          query: {
            item: event.target.id,
            keyword:
              data.products[Number(event.target.id)].data.subSections[0].name,
          },
        })
      }
    }
    if (router.pathname === '/application') {
      router.push({ pathname: path, query: { item: Number(event.target.id) } })
    } else if (router.pathname === '/aboutUs') {
      router.push({ pathname: path, query: { item: Number(event.target.id) } })
    } else if (router.pathname === '/careers') {
      router.push({ pathname: path, query: { item: Number(event.target.id) } })
    }
  }
  useEffect(() => {
    console.log('b')
  }, [buttonName])
  return <SideBarUI onClickMenu={onClickMenu} buttonName={buttonName} />
}

export default SideBarComponent
