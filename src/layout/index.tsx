import { useRouter } from 'next/dist/client/router'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import FooterComponent from './footer/Footer.container'
import HeaderComponent from './header/Header.container'
import SideBarComponent from './sideBar/SideBar.container'

interface ILayOutProps {
  children: any
}

const LayOut = ({ children }: ILayOutProps) => {
  const { setIsOpen } = useContext(GlobalContext)
  const onMouseOverBody = () => {
    setIsOpen(false)
  }
  const router = useRouter()
  const link = ['/application', '/aboutUs', '/products']
  const sideBar = link.includes(router.pathname)
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <HeaderComponent sideBar={sideBar}></HeaderComponent>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {sideBar ? (
            <div
              style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'row',
              }}
              onMouseOver={onMouseOverBody}
            >
              <SideBarComponent />
              <div onMouseOver={onMouseOverBody}>{children}</div>
            </div>
          ) : (
            <div onMouseOver={onMouseOverBody}>{children}</div>
          )}
        </div>
        <FooterComponent></FooterComponent>
      </div>
    </>
  )
}

export default LayOut
