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
  MenuHome,
  MenuItem,
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
              id='Home'
              onMouseOver={onMouseOverMenu}
              color={menu}
              onClick={onClickMenu}
            >
              {data.main.Home}
            </MenuHome>
            <MenuItem
              id='Product'
              onMouseOver={onMouseOverMenu}
              selected={menu === 'Product'}
              onClick={onClickMenu}
            >
              {data.main.Product}
            </MenuItem>
            <MenuItem
              id='Application'
              onMouseOver={onMouseOverMenu}
              selected={menu === 'Application'}
              onClick={onClickMenu}
            >
              {data.main.Applications}
            </MenuItem>
            <MenuItem
              id='AboutUs'
              onMouseOver={onMouseOverMenu}
              selected={menu === 'AboutUs'}
              onClick={onClickMenu}
            >
              {data.main.AboutUs}
            </MenuItem>
            {language === 'kor' && (
              <MenuItem
                id='Careers'
                onMouseOver={onMouseOverMenu}
                selected={menu === 'Careers'}
                onClick={onClickMenu}
              >
                {data.main.Careers}
              </MenuItem>
            )}
            <MenuItem
              id='ContactUs'
              onMouseOver={onMouseOverMenu}
              selected={menu === 'ContactUs'}
              onClick={onClickMenu}
            >
              {data.main.ContactUs}
            </MenuItem>
            <LanguageChangeWrapper>
              <LanguageEnglish
                id='en'
                onClick={onClickLanguage}
                color={language}
              >
                {data.main.Eng}
              </LanguageEnglish>
              <LanguageKorean
                id='kor'
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
                <NavBarMainMenu key=''>{data}</NavBarMainMenu>
              ))}
            </NavBarMainMenusWrapper>
            <NavBarMainMenuDetailWrapper language={language}>
              <ProductDetailsWrapper>
                {data.NavBar.Products.map((data: any) => (
                  <ProductDetails
                    key=''
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
                    key=''
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
                    key=''
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
                      key=''
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
