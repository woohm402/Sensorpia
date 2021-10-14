import { useRouter } from 'next/dist/client/router'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import SideBarUI from './SideBar.presenter'

const SideBarComponent = () => {
  const { setMenu } = useContext(GlobalContext)
  const router = useRouter()
  console.log('sideBar', router.query)
  const onClickMenu = (event: any) => {
    setMenu(event.target.id)
  }
  return <SideBarUI onClickMenu={onClickMenu} />
}

export default SideBarComponent
