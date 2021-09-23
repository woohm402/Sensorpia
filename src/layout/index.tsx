import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
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
    </div>
  )
}

export default LayOut
