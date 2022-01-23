import { useRouter } from 'next/dist/client/router'

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
import { useLanguageContext } from '../../context/language/language'
import { Fragment } from 'react'

interface IProps {
  onClickMenu: any
  buttonName: any
}

const SideBarUI = ({ onClickMenu, buttonName }: IProps) => {
  const router = useRouter()
  const pageIndex = Number(router.query.item)
  const { language, languageData: data } = useLanguageContext()
  const onClickScrollArrow = () => {
    window.scrollTo(0, 0)
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
          ? data.products.map((value: any, i: number) => (
              <Fragment key={i}>
                <SideBarMenusInnerWrapper
                  id={`${i}`}
                  onClick={onClickMenu}
                  //@ts-ignore
                  $color={pageIndex == i}
                >
                  {value.name}
                </SideBarMenusInnerWrapper>
                {value.name === '3-axis flux-gate magnetometer' && (
                  <SideBarProductsSubMenusWrapper>
                    {value.data.subSections.map((data: any, i: number) => (
                      <SideBarProductsIndividualWrapper key={i}>
                        <SideBarProductsIndividualIcon>
                          -
                        </SideBarProductsIndividualIcon>
                        <SideBarProductsIndividualText
                          id={data.name}
                          onClick={onClickMenu}
                          //@ts-ignore
                          $color={data.name === buttonName}
                        >
                          {data.name}
                        </SideBarProductsIndividualText>
                      </SideBarProductsIndividualWrapper>
                    ))}
                  </SideBarProductsSubMenusWrapper>
                )}
                {data.products.length - 1 !== i && <SideBarMenusLineDivider />}
              </Fragment>
            ))
          : router.pathname === '/application'
          ? data.applications.map((value: any, i: number) => (
              <Fragment key={i}>
                <SideBarMenusInnerWrapper
                  id={`${i}`}
                  onClick={onClickMenu}
                  //@ts-ignore
                  $color={pageIndex === i}
                >
                  {value.name}
                </SideBarMenusInnerWrapper>
                {data.applications.length - 1 !== i && (
                  <SideBarMenusLineDivider />
                )}
              </Fragment>
            ))
          : router.pathname === '/careers' && language === 'kor'
          ? data.careers?.map((value: any, i: number) => (
              <Fragment key={i}>
                <SideBarMenusInnerWrapper
                  id={`${i}`}
                  onClick={onClickMenu}
                  //@ts-ignore
                  $color={pageIndex === i}
                >
                  {value.name}
                </SideBarMenusInnerWrapper>
                {data.careers.length - 1 !== i && <SideBarMenusLineDivider />}
              </Fragment>
            ))
          : data.aboutUs.map((value: any, i: number) => (
              <Fragment key={i}>
                <SideBarMenusInnerWrapper
                  id={`${i}`}
                  onClick={onClickMenu}
                  //@ts-ignore
                  $color={pageIndex === i}
                >
                  {value.name}
                </SideBarMenusInnerWrapper>
                {data.aboutUs.length - 1 !== i && <SideBarMenusLineDivider />}
              </Fragment>
            ))}
      </SideBarMenusWrapper>
      {router.pathname === '/aboutUs' && (
        <ScrollArrowImageWrapper
          onClick={onClickScrollArrow}
          //@ts-ignore
          data={data.aboutUs[pageIndex]?.commonArrow}
        />
      )}
    </SideBarWrapper>
  )
}

export default SideBarUI
