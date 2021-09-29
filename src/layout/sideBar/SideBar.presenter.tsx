import { useRouter } from 'next/dist/client/router'
import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import {
  SideBarMenusInnerWrapper,
  SideBarMenusLineDivider,
  SideBarMenusWrapper,
  SideBarTitleWrapper,
  SideBarWrapper,
} from './SideBar.styles'

interface IProps {
  onClickMenu: any
}

const SideBarUI = ({ onClickMenu }: IProps) => {
  const router = useRouter()
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  const { menu } = useContext(GlobalContext)
  return (
    <SideBarWrapper menu={menu}>
      <SideBarTitleWrapper>
        {router.pathname === '/products'
          ? data.sidebar.name[0]
          : router.pathname === '/application'
          ? data.sidebar.name[1]
          : router.pathname === '/careers' && language === 'kor'
          ? data.sidebar.name[3]
          : data.sidebar.name[2]}
      </SideBarTitleWrapper>
      <SideBarMenusWrapper>
        {router.pathname === '/products'
          ? data.sidebar.Products.map((value: any, index: any) => (
              <>
                <SideBarMenusInnerWrapper
                  key=""
                  id={value}
                  onClick={onClickMenu}
                  //@ts-ignore
                  color={menu === value}
                >
                  {value}
                </SideBarMenusInnerWrapper>
                {data.sidebar.Products.length - 1 !== index && (
                  <SideBarMenusLineDivider />
                )}
              </>
            ))
          : router.pathname === '/application'
          ? data.sidebar.Application.map((value: any, index: any) => (
              <>
                <SideBarMenusInnerWrapper
                  key=""
                  id={value}
                  onClick={onClickMenu}
                  //@ts-ignore
                  color={menu === value}
                >
                  {value}
                </SideBarMenusInnerWrapper>
                {data.sidebar.Application.length - 1 !== index && (
                  <SideBarMenusLineDivider />
                )}
              </>
            ))
          : router.pathname === '/careers' && language === 'kor'
          ? data.sidebar.Careers.map((value: any, index: any) => (
              <>
                <SideBarMenusInnerWrapper
                  key=""
                  id={value}
                  onClick={onClickMenu}
                  //@ts-ignore
                  color={menu === value}
                >
                  {value}
                </SideBarMenusInnerWrapper>
                {data.sidebar.Careers.length - 1 !== index && (
                  <SideBarMenusLineDivider />
                )}
              </>
            ))
          : data.sidebar.AboutUs.map((value: any, index: any) => (
              <>
                <SideBarMenusInnerWrapper
                  key=""
                  id={value}
                  onClick={onClickMenu}
                  //@ts-ignore
                  color={menu === value}
                >
                  {value}
                </SideBarMenusInnerWrapper>
                {data.sidebar.AboutUs.length - 1 !== index && (
                  <SideBarMenusLineDivider />
                )}
              </>
            ))}
      </SideBarMenusWrapper>
    </SideBarWrapper>
  )
}

export default SideBarUI
