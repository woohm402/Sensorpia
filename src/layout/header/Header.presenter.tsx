import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import {
  AboutUsDetails,
  AboutUsDetailsWrapper,
  ApplicationsDetails,
  ApplicationsDetailsWrapper,
  HeaderWrapper,
  LanguageChangeWrapper,
  LanguageEnglish,
  LanguageKorean,
  MenuAboutUs,
  MenuApplication,
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
  return (
    <>
      <HeaderWrapper
        //@ts-ignore
        sideBar={sideBar}
      >
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
          <MenuContactUs
            id="ContactUs"
            onMouseOver={onMouseOverMenu}
            color={menu}
            onClick={onClickMenu}
          >
            {data.main.ContactUs}
          </MenuContactUs>
        </MenusWrapper>
        <LanguageChangeWrapper>
          <LanguageEnglish id="en" onClick={onClickLanguage} color={language}>
            {data.main.Eng}
          </LanguageEnglish>
          <LanguageKorean id="kor" onClick={onClickLanguage} color={language}>
            {data.main.Kor}
          </LanguageKorean>
        </LanguageChangeWrapper>
      </HeaderWrapper>
      {isOpen && (
        <NavBarWrapper>
          <NavBarMainMenusWrapper>
            {data.NavBar?.list.map((data: any) => (
              <NavBarMainMenu key="">{data}</NavBarMainMenu>
            ))}
          </NavBarMainMenusWrapper>
          <NavBarMainMenuDetailWrapper>
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
            <ApplicationsDetailsWrapper>
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
            <AboutUsDetailsWrapper>
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
          </NavBarMainMenuDetailWrapper>
        </NavBarWrapper>
      )}
    </>
  )
}

export default HeaderUI
