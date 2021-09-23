import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import FooterComponent from './footer/Footer.container'
import HeaderComponent from './header/Header.container'

interface ILayOutProps {
  children: any
}

const LayOut = ({ children }: ILayOutProps) => {
  const { setIsOpen } = useContext(GlobalContext)
  const onMouseOverBody = () => {
    setIsOpen(false)
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
      }}
    >
      <HeaderComponent></HeaderComponent>
      <div onMouseOver={onMouseOverBody}>{children}</div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default LayOut
