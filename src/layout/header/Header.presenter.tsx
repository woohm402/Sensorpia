import {
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
  SensorPiaLogo,
  SensorpiaLogoWrapper,
} from './Header.styles'

interface IProps {
  data: any
  language: any
  onClickLanguage: any
  menu: any
  onMouseOverMenu: any
}

const HeaderUI = ({
  data,
  language,
  onClickLanguage,
  menu,
  onMouseOverMenu,
}: IProps) => {
  return (
    <>
      <HeaderWrapper id="Header" onMouseOver={onMouseOverMenu}>
        <SensorpiaLogoWrapper>
          <SensorPiaLogo src={data.main.logo} />
        </SensorpiaLogoWrapper>
        <MenusWrapper>
          <MenuHome id="Home" onMouseOver={onMouseOverMenu} color={menu}>
            {data.main.Home}
          </MenuHome>
          <MenuProduct id="Product" onMouseOver={onMouseOverMenu} color={menu}>
            {data.main.Product}
          </MenuProduct>
          <MenuApplication
            id="Application"
            onMouseOver={onMouseOverMenu}
            color={menu}
          >
            {data.main.Applications}
          </MenuApplication>
          <MenuAboutUs id="AboutUs" onMouseOver={onMouseOverMenu} color={menu}>
            {data.main.AboutUs}
          </MenuAboutUs>
          <MenuContactUs
            id="ContactUs"
            onMouseOver={onMouseOverMenu}
            color={menu}
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
    </>
  )
}

export default HeaderUI
