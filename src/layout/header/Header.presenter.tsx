import { useRouter } from 'next/dist/client/router'
import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import {
  AboutUsDetails,
  AboutUsDetailsWrapper,
  ApplicationsDetails,
  ApplicationsDetailsWrapper,
  CareersDetails,
  CareersDetailsWrapper,
  HeaderBigWrapper,
  HeaderWrapper,
  LanguageChangeWrapper,
  LanguageEnglish,
  LanguageKorean,
  MenuAboutUs,
  MenuApplication,
  MenuCareers,
  MenuContactUs,
  MenuHome,
  MenuProduct,
  MenusWrapper,
  NavBarMainMenu,
  NavBarMainMenuDetailWrapper,
  NavBarMainMenusWrapper,
  NavBarWrapper,
  ProductDetails,
  ProductDetailsWrapper,
  SensorPiaLogo,
  SensorpiaLogoWrapper,
  NavBarBigWrapper,
  SensorpiaTempLogoWrapper,
} from './Header.styles'

interface IProps {
  data: any
  language: any
  onClickLanguage: any
  menu: any
  onMouseOverMenu: any
  onMouseOverDetailMenu: any
  detailMenu: any
  onClickLogo: any
  sideBar: any
  onClickMenu: any
  onClickApplicationDetailMenu: any
  onClickProductDetailMenu: any
  onClickAboutUsDetailMenu: any
  onClickCareersDetailMenu: any
  onMouseLeaveMenu: any
}

const HeaderUI = ({
  data,
  language,
  onClickLanguage,
  menu,
  onMouseOverMenu,
  onMouseOverDetailMenu,
  detailMenu,
  onClickLogo,
  sideBar,
  onClickMenu,
  onClickApplicationDetailMenu,
  onClickProductDetailMenu,
  onClickAboutUsDetailMenu,
  onClickCareersDetailMenu,
  onMouseLeaveMenu,
}: IProps) => {
  const { isOpen } = useContext(GlobalContext)
  const router = useRouter()
  return (
    <>
      <HeaderBigWrapper
        //@ts-ignore
        sideBar={sideBar}
        router={router}
      >
        <HeaderWrapper>
          <SensorpiaTempLogoWrapper onClick={onClickLogo} />
          <SensorpiaLogoWrapper>
            <SensorPiaLogo src={data.main.logo} />
          </SensorpiaLogoWrapper>
          <MenusWrapper>
            <MenuHome
              id="Home"
              onMouseOver={onMouseOverMenu}
              menu={menu}
              onClick={onClickMenu}
            >
              {data.main.Home}
            </MenuHome>
            <MenuProduct
              id="Product"
              onMouseOver={onMouseOverMenu}
              menu={menu}
              onClick={onClickMenu}
            >
              {data.main.Product}
            </MenuProduct>
            <MenuApplication
              id="Application"
              onMouseOver={onMouseOverMenu}
              menu={menu}
              onClick={onClickMenu}
            >
              {data.main.Applications}
            </MenuApplication>
            <MenuAboutUs
              id="AboutUs"
              onMouseOver={onMouseOverMenu}
              menu={menu}
              onClick={onClickMenu}
            >
              {data.main.AboutUs}
            </MenuAboutUs>
            {language === 'kor' && (
              <MenuCareers
                id="Careers"
                onMouseOver={onMouseOverMenu}
                menu={menu}
                onClick={onClickMenu}
              >
                {data.main.Careers}
              </MenuCareers>
            )}
            <MenuContactUs
              id="ContactUs"
              onMouseOver={onMouseOverMenu}
              menu={menu}
              onClick={onClickMenu}
            >
              {data.main.ContactUs}
            </MenuContactUs>
            <LanguageChangeWrapper>
              <LanguageEnglish
                id="en"
                onClick={onClickLanguage}
                language={language}
              >
                {data.main.Eng}
              </LanguageEnglish>
              <LanguageKorean
                id="kor"
                onClick={onClickLanguage}
                language={language}
              >
                {data.main.Kor}
              </LanguageKorean>
            </LanguageChangeWrapper>
          </MenusWrapper>
        </HeaderWrapper>
      </HeaderBigWrapper>
      {isOpen && (
        <NavBarBigWrapper onMouseLeave={onMouseLeaveMenu}>
          <NavBarWrapper>
            <NavBarMainMenusWrapper language={language}>
              {data.navBar?.list.map((data: any) => (
                <NavBarMainMenu key="">{data}</NavBarMainMenu>
              ))}
            </NavBarMainMenusWrapper>
            <NavBarMainMenuDetailWrapper language={language}>
              <ProductDetailsWrapper>
                {data.navBar.products.map((data: any, index: any) => (
                  <ProductDetails
                    key=""
                    id={data}
                    onClick={onClickProductDetailMenu}
                    onMouseOver={onMouseOverDetailMenu}
                    menuColor={detailMenu === data}
                  >
                    {data}
                  </ProductDetails>
                ))}
              </ProductDetailsWrapper>
              <ApplicationsDetailsWrapper language={language}>
                {data.navBar.applications.map((data: any) => (
                  <ApplicationsDetails
                    key=""
                    id={data}
                    onMouseOver={onMouseOverDetailMenu}
                    onClick={onClickApplicationDetailMenu}
                    menuColor={detailMenu === data}
                  >
                    {data}
                  </ApplicationsDetails>
                ))}
              </ApplicationsDetailsWrapper>
              <AboutUsDetailsWrapper language={language}>
                {data.navBar.aboutUs.map((data: any) => (
                  <AboutUsDetails
                    key=""
                    id={data}
                    onClick={onClickAboutUsDetailMenu}
                    onMouseOver={onMouseOverDetailMenu}
                    menuColor={detailMenu === data}
                  >
                    {data}
                  </AboutUsDetails>
                ))}
              </AboutUsDetailsWrapper>
              {language === 'kor' && (
                <CareersDetailsWrapper>
                  {data.navBar.careers.map((data: any) => (
                    <CareersDetails
                      key=""
                      id={data}
                      onMouseOver={onMouseOverDetailMenu}
                      menuColor={detailMenu === data}
                      onClick={onClickCareersDetailMenu}
                    >
                      {data}
                    </CareersDetails>
                  ))}
                </CareersDetailsWrapper>
              )}
            </NavBarMainMenuDetailWrapper>
          </NavBarWrapper>
        </NavBarBigWrapper>
      )}
    </>
  )
}

export default HeaderUI
