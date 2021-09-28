import { useRouter } from 'next/dist/client/router'
import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import ContactUsUI from './ContactUs.presenter'

const ContactUsComponent = () => {
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  return <ContactUsUI data={data} />
}

export default ContactUsComponent
