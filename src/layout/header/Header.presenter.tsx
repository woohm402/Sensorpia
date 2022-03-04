import { useRouter } from 'next/dist/client/router';
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
  LanguageButton,
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
  MenuItem,
  HeaderSubWrapper,
} from './Header.styles';
import { useHeaderContext } from '../../context/header/header';

interface IProps {
  data: any;
  language: any;
  onClickLanguage: any;
  menu: any;
  onMouseOverMenu: any;
  onMouseOverDetailMenu: any;
  detailMenu: any;
  onClickLogo: any;
  sideBar: any;
  onClickMenu: any;
  onClickApplicationDetailMenu: any;
  onClickProductDetailMenu: any;
  onClickAboutUsDetailMenu: any;
  onClickCareersDetailMenu: any;
  onMouseLeaveMenu: any;
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
  const { isOpen } = useHeaderContext();
  const router = useRouter();
  return (
    <>
      <HeaderBigWrapper
        //@ts-ignore
        sideBar={sideBar}
        router={router}
      >
        <HeaderWrapper>
          <HeaderSubWrapper>
            <SensorpiaTempLogoWrapper onClick={onClickLogo} />
            <SensorpiaLogoWrapper>
              <SensorPiaLogo src={data.main.logo} />
            </SensorpiaLogoWrapper>
            <MenusWrapper>
              <MenuItem
                id="Home"
                onMouseOver={onMouseOverMenu}
                selected={menu === 'Home'}
                onClick={onClickMenu}
              >
                {data.main.Home}
              </MenuItem>
              <MenuItem
                id="Product"
                onMouseOver={onMouseOverMenu}
                selected={menu === 'Product'}
                onClick={onClickMenu}
              >
                {data.main.Product}
              </MenuItem>
              <MenuItem
                id="Application"
                onMouseOver={onMouseOverMenu}
                selected={menu === 'Application'}
                onClick={onClickMenu}
              >
                {data.main.Applications}
              </MenuItem>
              <MenuItem
                id="AboutUs"
                onMouseOver={onMouseOverMenu}
                selected={menu === 'AboutUs'}
                onClick={onClickMenu}
              >
                {data.main.AboutUs}
              </MenuItem>
              {language === 'kor' && (
                <MenuItem
                  id="Careers"
                  onMouseOver={onMouseOverMenu}
                  selected={menu === 'Careers'}
                  onClick={onClickMenu}
                >
                  {data.main.Careers}
                </MenuItem>
              )}
              <MenuItem
                id="ContactUs"
                onMouseOver={onMouseOverMenu}
                selected={menu === 'ContactUs'}
                onClick={onClickMenu}
              >
                {data.main.ContactUs}
              </MenuItem>
              <LanguageChangeWrapper>
                <LanguageButton
                  id="en"
                  onClick={onClickLanguage}
                  selected={language === 'en'}
                >
                  {data.main.Eng}
                </LanguageButton>
                <LanguageButton
                  id="kor"
                  onClick={onClickLanguage}
                  selected={language === 'kor'}
                >
                  {data.main.Kor}
                </LanguageButton>
              </LanguageChangeWrapper>
            </MenusWrapper>
          </HeaderSubWrapper>
        </HeaderWrapper>
      </HeaderBigWrapper>
      {isOpen && (
        <NavBarBigWrapper onMouseLeave={onMouseLeaveMenu}>
          <NavBarWrapper>
            <NavBarMainMenusWrapper language={language}>
              {data.navBar?.list.map((data: any, i: number) => (
                <NavBarMainMenu key={i}>{data}</NavBarMainMenu>
              ))}
            </NavBarMainMenusWrapper>
            <NavBarMainMenuDetailWrapper language={language}>
              <ProductDetailsWrapper>
                {data.navBar.products.map((data: any, index: any) => (
                  <ProductDetails
                    key={index}
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
                {data.navBar.applications.map((data: any, i: number) => (
                  <ApplicationsDetails
                    key={i}
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
                {data.navBar.aboutUs.map((data: any, i: number) => (
                  <AboutUsDetails
                    key={i}
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
                  {data.navBar.careers.map((data: any, i: number) => (
                    <CareersDetails
                      key={i}
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
  );
};

export default HeaderUI;
