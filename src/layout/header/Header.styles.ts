import styled from '@emotion/styled';
interface IProps {
  menu?: any;
  color?: any;
  menuColor?: any;
  sideBar?: any;
  router?: any;
  language?: any;
  data?: any;
  selected?: any;
}

export const HeaderBigWrapper = styled.div`
  min-width: 100vw;
  height: 87px;
  display: flex;
  box-shadow: ${(props: IProps) =>
    (props.sideBar || props.router.pathname === '/contactUs') &&
    '0px 2px 15px rgba(0,0,0, 0.15)'};
  z-index: 1;
  position: relative;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  height: 87px;
  position: relative;
`;
export const HeaderSubWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 70px;
`;

export const SensorpiaTempLogoWrapper = styled.div`
  position: absolute;
  width: 139px;
  height: 27px;
  cursor: pointer;
  top: 30px;
`;

export const SensorpiaLogoWrapper = styled.div`
  width: 156px;
  height: 31px;
  margin-right: 35px;
`;
export const SensorPiaLogo = styled.img`
  width: 156px;
  height: 31px;
  cursor: pointer;
`;

export const MenusWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 700;
`;
export const MenuItem = styled.span`
  margin-right: 35px;
  cursor: pointer;
  color: ${(props: IProps) => (props.selected ? '#0070c0' : '#9c9d9e')};
`;

export const MenuHome = styled.span`
  margin-right: 35px;
  cursor: pointer;
  color: ${(props: IProps) => (props.menu === 'Home' ? '#0070c0' : '#9c9d9e')};
`;
export const MenuProduct = styled.span`
  margin-right: 35px;
  color: ${(props: IProps) =>
    props.menu === 'Product' ? '#0070c0' : '#9c9d9e'};
  cursor: pointer;
`;
export const MenuApplication = styled.span`
  margin-right: 35px;
  cursor: pointer;
  color: ${(props: IProps) =>
    props.menu === 'Application' ? '#0070c0' : '#9c9d9e'};
`;
export const MenuAboutUs = styled.span`
  margin-right: 35px;
  color: ${(props: IProps) =>
    props.menu === 'AboutUs' ? '#0070c0' : '#9c9d9e'};
  cursor: pointer;
`;
export const MenuContactUs = styled.span`
  color: ${(props: IProps) =>
    props.menu === 'ContactUs' ? '#0070c0' : '#9c9d9e'};
  cursor: pointer;
  margin-right: 35px;
`;
export const MenuCareers = styled.span`
  margin-right: 35px;
  color: ${(props: IProps) =>
    props.menu === 'Careers' ? '#0070c0' : '#9c9d9e'};
  cursor: pointer;
`;

export const LanguageChangeWrapper = styled.div`
  width: 121px;
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const LanguageButton = styled.button<{ selected: boolean }>`
  width: 58px;
  height: 34px;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  cursor: pointer;

  color: ${({ selected }) => (selected ? '#ffffff' : '#9c9d9e')};
  background: ${({ selected }) => (selected ? '#0070c0' : '#ffffff')};
  border: 2px solid ${({ selected }) => (selected ? '#0070c0' : '#9C9D9E')};
`;

export const NavBarBigWrapper = styled.div`
  width: 100vw;
  height: 231px;
  position: absolute;
  z-index: 100;
  top: 87px;
`;

export const NavBarWrapper = styled.div`
  width: 1100px;
  height: 231px;
  background: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
`;

export const NavBarMainMenusWrapper = styled.div`
  left: ${(props: IProps) => (props.language === 'kor' ? '375px' : '462px')};
  top: 25px;
  width: ${(props: IProps) => (props.language === 'kor' ? '500px' : '418px')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;
export const NavBarMainMenu = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
`;
export const NavBarMainMenuDetailWrapper = styled.div`
  position: relative;
  left: ${(props: IProps) => (props.language === 'kor' ? '375px' : '462px')};
  top: 37px;
  display: flex;
  flex-direction: row;
`;
export const ProductDetailsWrapper = styled.div`
  max-width: 101px;
  display: flex;
  flex-direction: column;
`;
export const ProductDetails = styled.span`
  margin-bottom: 15px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  color: ${(props: IProps) => (props.menuColor ? '#0070c0' : '#6d6d6d')};
`;
export const ApplicationsDetailsWrapper = styled.div`
  margin-left: ${(props: IProps) => (props.language === 'kor' ? '0px' : '2px')};
  max-width: ${(props: IProps) => (props.language === 'kor' ? '54px' : '81px')};
  display: flex;
  flex-direction: column;
`;
export const ApplicationsDetails = styled.span`
  margin-bottom: 15px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  color: ${(props: IProps) => (props.menuColor ? '#0070c0' : '#6d6d6d')};
`;

export const AboutUsDetailsWrapper = styled.div`
  margin-left: ${(props: IProps) =>
    props.language === 'kor' ? '77px' : '49px'};
  max-width: ${(props: IProps) =>
    props.language === 'kor' ? '85px' : '110px'};
  display: flex;
  flex-direction: column;
`;
export const AboutUsDetails = styled.span`
  margin-bottom: 25px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  color: ${(props: IProps) => (props.menuColor ? '#0070c0' : '#6d6d6d')};
`;
export const CareersDetailsWrapper = styled.div`
  margin-left: 19px;
  max-width: 63px;
  display: flex;
  flex-direction: column;
`;
export const CareersDetails = styled.span`
  margin-bottom: 25px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: ${(props: IProps) => (props.menuColor ? '#0070c0' : '#6d6d6d')};
`;
