import HeaderComponent from './header/Header.container'

interface ILayOutProps {
  children: any
}

const LayOut = ({ children }: ILayOutProps) => {
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
      <div>{children}</div>
    </div>
  )
}

export default LayOut
