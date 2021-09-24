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
  menu: any
}

const SideBarUI = ({ onClickMenu, menu }: IProps) => {
  const router = useRouter()
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  return (
    <SideBarWrapper>
      <SideBarTitleWrapper>
        {router.pathname === '/products'
          ? data.sidebar.name[0]
          : router.pathname === '/application'
          ? data.sidebar.name[1]
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
                {data.sidebar.Products.length - 1 !== index && (
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
                {data.sidebar.Products.length - 1 !== index && (
                  <SideBarMenusLineDivider />
                )}
              </>
            ))}
      </SideBarMenusWrapper>
    </SideBarWrapper>
  )
}

export default SideBarUI
