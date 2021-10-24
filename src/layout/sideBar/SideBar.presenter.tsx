import { useRouter } from 'next/dist/client/router'
import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import {
  ScrollArrowImageWrapper,
  SideBarMenusInnerWrapper,
  SideBarMenusLineDivider,
  SideBarMenusWrapper,
  SideBarProductsIndividualIcon,
  SideBarProductsIndividualText,
  SideBarProductsIndividualWrapper,
  SideBarProductsSubMenusWrapper,
  SideBarTitleWrapper,
  SideBarWrapper,
} from './SideBar.styles'

interface IProps {
  onClickMenu: any
}

const SideBarUI = ({ onClickMenu }: IProps) => {
  const router = useRouter()
  const pageIndex = Number(router.query.item)
  const path = router.pathname
  const buttonName = router.query.keyword
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  const onClickScrollArrow = () => {
    window.scrollTo(0, 0)
  }
  const onClickProductDetailsTwo = (event: any) => {
    router.push({
      pathname: path,
      query: { item: router.query.item, keyword: event.target.id },
    })
    console.log(path, event.target.id)
    console.log('event', event.target.id)
  }
  return (
    <SideBarWrapper routerPath={router.pathname}>
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
          ? data.products.map((value: any, index: any) => (
              <>
                <SideBarMenusInnerWrapper
                  key=""
                  id={index}
                  onClick={onClickMenu}
                  //@ts-ignore
                  color={pageIndex == index}
                >
                  {value.name}
                </SideBarMenusInnerWrapper>
                {value.name === '3-axis flux-gate magnetometer' && (
                  <SideBarProductsSubMenusWrapper>
                    {value.data.subSections.map((data: any) => (
                      <SideBarProductsIndividualWrapper key="">
                        <SideBarProductsIndividualIcon>
                          -
                        </SideBarProductsIndividualIcon>
                        <SideBarProductsIndividualText
                          id={data.name}
                          onClick={onClickProductDetailsTwo}
                          //@ts-ignore
                          color={data.name === buttonName}
                        >
                          {data.name}
                        </SideBarProductsIndividualText>
                      </SideBarProductsIndividualWrapper>
                    ))}
                  </SideBarProductsSubMenusWrapper>
                )}
                {data.products.length - 1 !== index && (
                  <SideBarMenusLineDivider />
                )}
              </>
            ))
          : router.pathname === '/application'
          ? data.applications.map((value: any, index: any) => (
              <>
                <SideBarMenusInnerWrapper
                  key=""
                  id={index}
                  onClick={onClickMenu}
                  //@ts-ignore
                  color={pageIndex === index}
                >
                  {value.name}
                </SideBarMenusInnerWrapper>
                {data.applications.length - 1 !== index && (
                  <SideBarMenusLineDivider />
                )}
              </>
            ))
          : router.pathname === '/careers' && language === 'kor'
          ? data.careers?.map((value: any, index: any) => (
              <>
                <SideBarMenusInnerWrapper
                  key=""
                  id={index}
                  onClick={onClickMenu}
                  //@ts-ignore
                  color={pageIndex === index}
                >
                  {value.name}
                </SideBarMenusInnerWrapper>
                {data.careers.length - 1 !== index && (
                  <SideBarMenusLineDivider />
                )}
              </>
            ))
          : data.aboutUs.map((value: any, index: any) => (
              <>
                <SideBarMenusInnerWrapper
                  key=""
                  id={index}
                  onClick={onClickMenu}
                  //@ts-ignore
                  color={pageIndex === index}
                >
                  {value.name}
                </SideBarMenusInnerWrapper>
                {data.aboutUs.length - 1 !== index && (
                  <SideBarMenusLineDivider />
                )}
              </>
            ))}
      </SideBarMenusWrapper>
      {router.pathname === '/aboutUs' && (
        <ScrollArrowImageWrapper
          onClick={onClickScrollArrow}
          //@ts-ignore
          data={data.aboutUs[pageIndex]?.commonArrow}
        ></ScrollArrowImageWrapper>
      )}
    </SideBarWrapper>
  )
}

export default SideBarUI
