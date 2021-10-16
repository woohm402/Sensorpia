import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../pages/_app'
import CareersUI from './Careers.presenter'

const CareersComponent = () => {
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  return <CareersUI data={data} language={language} />
}

export default CareersComponent
