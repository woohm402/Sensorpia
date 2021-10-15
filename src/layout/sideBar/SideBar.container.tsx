import { useRouter } from 'next/dist/client/router'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import SideBarUI from './SideBar.presenter'

const SideBarComponent = () => {
  const { setMenu } = useContext(GlobalContext)
  const router = useRouter()
  const path = router.pathname
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  const onClickMenu = (event: any) => {
    if (router.pathname === '/products') {
      router.push({
        pathname: path,
        query: {
          item: Number(event.target.id),
          keyword:
            data.products[Number(event.target.id)].data.subSections[0].name,
        },
      })
    } else if (router.pathname === '/application') {
      router.push({ pathname: path, query: { item: Number(event.target.id) } })
    } else {
      setMenu(event.target.id)
    }
  }
  return <SideBarUI onClickMenu={onClickMenu} />
}

export default SideBarComponent
