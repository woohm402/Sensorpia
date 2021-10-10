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
          <SensorpiaLogoWrapper>
            <SensorPiaLogo src={data.main.logo} onClick={onClickLogo} />
          </SensorpiaLogoWrapper>
          <MenusWrapper>
            <MenuHome
              id="Home"
              onMouseOver={onMouseOverMenu}
              color={menu}
              onClick={onClickMenu}
            >
              {data.main.Home}
            </MenuHome>
            <MenuProduct
              id="Product"
              onMouseOver={onMouseOverMenu}
              color={menu}
              onClick={onClickMenu}
            >
              {data.main.Product}
            </MenuProduct>
            <MenuApplication
              id="Application"
              onMouseOver={onMouseOverMenu}
              color={menu}
              onClick={onClickMenu}
            >
              {data.main.Applications}
            </MenuApplication>
            <MenuAboutUs
              id="AboutUs"
              onMouseOver={onMouseOverMenu}
              color={menu}
              onClick={onClickMenu}
            >
              {data.main.AboutUs}
            </MenuAboutUs>
            {language === 'kor' && (
              <MenuCareers
                id="Careers"
                onMouseOver={onMouseOverMenu}
                color={menu}
                onClick={onClickMenu}
              >
                {data.main.Careers}
              </MenuCareers>
            )}
            <MenuContactUs
              id="ContactUs"
              onMouseOver={onMouseOverMenu}
              color={menu}
              onClick={onClickMenu}
            >
              {data.main.ContactUs}
            </MenuContactUs>
            <LanguageChangeWrapper>
              <LanguageEnglish
                id="en"
                onClick={onClickLanguage}
                color={language}
              >
                {data.main.Eng}
              </LanguageEnglish>
              <LanguageKorean
                id="kor"
                onClick={onClickLanguage}
                color={language}
              >
                {data.main.Kor}
              </LanguageKorean>
            </LanguageChangeWrapper>
          </MenusWrapper>
        </HeaderWrapper>
        {isOpen && (
          <NavBarWrapper>
            <NavBarMainMenusWrapper language={language}>
              {data.NavBar?.list.map((data: any) => (
                <NavBarMainMenu key="">{data}</NavBarMainMenu>
              ))}
            </NavBarMainMenusWrapper>
            <NavBarMainMenuDetailWrapper language={language}>
              <ProductDetailsWrapper>
                {data.NavBar.Products.map((data: any) => (
                  <ProductDetails
                    key=""
                    id={data}
                    onMouseOver={onMouseOverDetailMenu}
                    menuColor={detailMenu === data}
                  >
                    {data}
                  </ProductDetails>
                ))}
              </ProductDetailsWrapper>
              <ApplicationsDetailsWrapper language={language}>
                {data.NavBar.Applications.map((data: any) => (
                  <ApplicationsDetails
                    key=""
                    id={data}
                    onMouseOver={onMouseOverDetailMenu}
                    menuColor={detailMenu === data}
                  >
                    {data}
                  </ApplicationsDetails>
                ))}
              </ApplicationsDetailsWrapper>
              <AboutUsDetailsWrapper language={language}>
                {data.NavBar.AboutUs.map((data: any) => (
                  <AboutUsDetails
                    key=""
                    id={data}
                    onMouseOver={onMouseOverDetailMenu}
                    menuColor={detailMenu === data}
                  >
                    {data}
                  </AboutUsDetails>
                ))}
              </AboutUsDetailsWrapper>
              {language === 'kor' && (
                <CareersDetailsWrapper>
                  {data.NavBar.Careers.map((data: any) => (
                    <CareersDetails
                      key=""
                      id={data}
                      onMouseOver={onMouseOverDetailMenu}
                      menuColor={detailMenu === data}
                    >
                      {data}
                    </CareersDetails>
                  ))}
                </CareersDetailsWrapper>
              )}
            </NavBarMainMenuDetailWrapper>
          </NavBarWrapper>
        )}
      </HeaderBigWrapper>
    </>
  )
}

export default HeaderUI
