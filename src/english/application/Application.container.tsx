import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import ApplicationUI from './Application.presenter'

const ApplicationComponet = () => {
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  const router = useRouter()
  const pageIndex = Number(router.query.item)
  return <ApplicationUI data={data} pageIndex={pageIndex} />
}

export default ApplicationComponet
