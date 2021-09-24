import { useState } from 'react'
import SideBarUI from './SideBar.presenter'

const SideBarComponent = () => {
  const [menu, setMenu] = useState('')
  console.log(menu)
  const onClickMenu = (event: any) => {
    setMenu(event.target.id)
  }
  return <SideBarUI onClickMenu={onClickMenu} />
}

export default SideBarComponent
