import styled from '@emotion/styled'
interface IProps {
  color?: any
  menuColor?: any
}

export const HeaderWrapper = styled.div`
  width: 1920px;
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`
export const SensorpiaLogoWrapper = styled.div`
  margin-left: 150px;
  width: 239px;
  height: 46px;
`
export const SensorPiaLogo = styled.img``

export const MenusWrapper = styled.div`
  margin-left: 495px;
  width: 696px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #9c9d9e;
`
export const MenuHome = styled.span`
  cursor: pointer;
  color: ${(props: IProps) => (props.color === 'Home' ? '#0070c0' : '#9c9d9e')};
`
export const MenuProduct = styled.span`
  color: ${(props: IProps) =>
    props.color === 'Product' ? '#0070c0' : '#9c9d9e'};
  cursor: pointer;
`
export const MenuApplication = styled.span`
  cursor: pointer;
  color: ${(props: IProps) =>
    props.color === 'Application' ? '#0070c0' : '#9c9d9e'};
`
export const MenuAboutUs = styled.span`
  color: ${(props: IProps) =>
    props.color === 'AboutUs' ? '#0070c0' : '#9c9d9e'};
  cursor: pointer;
`
export const MenuContactUs = styled.span`
  color: ${(props: IProps) =>
    props.color === 'ContactUs' ? '#0070c0' : '#9c9d9e'};
  cursor: pointer;
`

export const LanguageChangeWrapper = styled.div`
  margin-left: 69px;
  width: 121px;
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LanguageEnglish = styled.div`
  width: 58px;
  height: 34px;
  border: 2px solid #9c9d9e;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: ${(props: IProps) => (props.color === 'en' ? '#ffffff' : '#9c9d9e')};
  cursor: pointer;
  background: ${(props: IProps) =>
    props.color === 'en' ? '#0070c0' : '#ffffff'};
`
export const LanguageKorean = styled.div`
  width: 58px;
  height: 34px;
  border: 2px solid #9c9d9e;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: ${(props: IProps) => (props.color === 'kor' ? '#ffffff' : '#9c9d9e')};
  cursor: pointer;
  background: ${(props: IProps) =>
    props.color === 'kor' ? '#0070c0' : '#ffffff'};
`
export const NavBarWrapper = styled.div`
  width: 1920px;
  height: 311px;
  background: rgba(255, 255, 255, 0.8);
  top: 110px;
  position: fixed;
  z-index: 99;
`

export const NavBarMainMenusWrapper = styled.div`
  left: 1007px;
  top: 30px;
  width: 573px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`
export const NavBarMainMenu = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #262626;
`
export const NavBarMainMenuDetailWrapper = styled.div`
  position: relative;
  left: 1007px;
  top: 52px;
  display: flex;
  flex-direction: row;
`
export const ProductDetailsWrapper = styled.div`
  max-width: 124px;
  display: flex;
  flex-direction: column;
`
export const ProductDetails = styled.span`
  margin-bottom: 25px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${(props: IProps) => (props.menuColor ? '#0070c0' : '#6d6d6d')};
`
export const ApplicationsDetailsWrapper = styled.div`
  margin-left: 26px;
  max-width: 124px;
  display: flex;
  flex-direction: column;
`
export const ApplicationsDetails = styled.span`
  margin-bottom: 25px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${(props: IProps) => (props.menuColor ? '#0070c0' : '#6d6d6d')};
`

export const AboutUsDetailsWrapper = styled.div`
  margin-left: 80px;
  max-width: 138px;
  display: flex;
  flex-direction: column;
`
export const AboutUsDetails = styled.span`
  margin-bottom: 25px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${(props: IProps) => (props.menuColor ? '#0070c0' : '#6d6d6d')};
`
