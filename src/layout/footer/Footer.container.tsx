import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import FooterUI from './Footer.presenter'

const FooterComponent = () => {
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  return <FooterUI data={data} />
}

export default FooterComponent
