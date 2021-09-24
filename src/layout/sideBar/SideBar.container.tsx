import { useState } from 'react'
import SideBarUI from './SideBar.presenter'

const SideBarComponent = () => {
  const [menu, setMenu] = useState('')
  const onClickMenu = (event: any) => {
    setMenu(event.target.id)
  }
  return <SideBarUI onClickMenu={onClickMenu} menu={menu} />
}

export default SideBarComponent
