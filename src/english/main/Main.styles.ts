import styled from '@emotion/styled'
interface IProps {
  translate?: any
  language?: any
}
export const SliderMainWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 770px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
export const SliderTextWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 140px;
  width: 414px;
  z-index: 99;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  color: #ffffff;
`
export const SliderSubTextWrapper = styled.div`
  position: absolute;
  top: 187px;
  left: 140px;
  width: 559px;
  z-index: 99;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #ffffff;
`
export const SliderDraggableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1920px;
  height: 770px;
  overflow: hidden;
  position: relative;
`

export const SliderImage = styled.div`
  width: 1920px;
  height: 770px;
  object-fit: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('./MainSlider1.svg');
`

export const SliderImageTwo = styled.div`
  width: 1920px;
  height: 770px;
  object-fit: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('./MainSlider2.svg');
`
export const SliderImageThree = styled.div`
  width: 1920px;
  height: 770px;
  object-fit: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('./MainSlider3.svg');
`
export const SliderImageFour = styled.div`
  width: 1920px;
  height: 770px;
  object-fit: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('./MainSlider4.svg');
`

export const SliderPreviousButton = styled.div`
  cursor: pointer;
  top: 356px;
  left: 50px;
  width: 20px;
  height: 58px;
  background: url('./SliderPrevious.svg');
  position: absolute;
`
export const SliderNextButton = styled.div`
  top: 356px;
  left: 1850px;
  cursor: pointer;
  width: 20px;
  height: 58px;
  background: url('./SliderPrevious.svg');
  position: absolute;
  transform: rotate(180deg);
`
export const SliderInnerImageWrapper = styled.div`
  opacity: 1;
  display: flex;
  flex-direction: row;
  width: 7680px;
  height: 770px;
  overflow: hidden;
  position: relative;
  ${(props: IProps) => `transform: translateX(${props.translate}px);`};
  transition: transform 500ms ease 0s;
`
export const SliderMidWrapper = styled.div`
  position: absolute;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  user-select: none;
`
export const MainTitleWrapper = styled.div`
  min-width: 417px;
  margin: 80px auto 0px auto;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 50px;
  color: #262626;
  text-align: center;
`

export const MainLineWrapper = styled.div`
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  width: 1370px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const MainFirstLineDivider = styled.div`
  width: 637px;
  height: 0px;
  border: 3px solid #9c9d9e;
`
export const MainSecondLineDivider = styled.div`
  width: 637px;
  height: 0px;
  border: 3px solid #9c9d9e;
`
export const MainProductsNameWrapper = styled.div`
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  width: 1125px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MainProductOneWrapper = styled.div`
  max-width: 392px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  text-align: center;
  color: #262626;
`

export const MainProductTwoWrapper = styled.div`
  max-width: 392px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  text-align: center;
  color: #262626;
`
export const MainImagesWrapper = styled.div`
  width: 1370px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 45px auto 0px auto;
`
export const SatelliteWrapper = styled.div`
  width: 637px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const SatelliteImageOne = styled.div`
  position: relative;
  width: 311px;
  height: 430px;
  background: url('./SatelliteOne.svg');
`
export const SatelliteImageOneText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: #262626;
  top: 382px;
  left: 218px;
`

export const SatelliteImageTwo = styled.div`
  position: relative;
  width: 311px;
  height: 430px;
  background: url('./SatelliteTwo.svg');
  object-fit: cover;
`
export const SatelliteImageTwoText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: #262626;
  top: 350px;
  left: 218px;
`
export const DefenseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 637px;
`

export const DefenseImageOne = styled.div`
  position: relative;
  width: 345px;
  height: 430px;
  background: url('./DefenseOne.svg');
`
export const DefenseImageOneText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: #262626;
  top: 382px;
  left: 252px;
`

export const DefenseImageTwo = styled.div`
  position: relative;
  width: 277px;
  height: 430px;
  background: url('./DefenseTwo.svg');
  background-size: cover;
`
export const DefenseImageTwoText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: #262626;
  top: 382px;
  left: 184px;
`
export const SpecificationButtonsWrapper = styled.div`
  margin: 45px auto 0px auto;
  width: 1355px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const SpecificationSatelliteButtonsWrapper = styled.div`
  width: 605px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const SpecificationButton = styled.button`
  width: 279px;
  background: #f4f7ff;
  border: 2px solid #0070c0;
  box-sizing: border-box;
  border-radius: 30px;
  color: #0070c0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
  cursor: pointer;
`
export const SpecificationDefenseButtonsWrapper = styled.div`
  width: 605px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const MainThirdLineDivider = styled.div`
  margin: 100px auto 0px auto;
  width: 637px;
  height: 0px;
  border: 3px solid #9c9d9e;
`

export const MainThirdProductWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  text-align: center;
  color: #262626;
  min-width: 373px;
  margin: 35px auto 0px auto;
`

export const MainThirdProductImageWrapper = styled.div`
  margin: 45px auto 0px auto;
  width: 533px;
  height: 430px;
  background-image: url('./MagneticTorquer.svg');
`
export const TorquerButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const NavBarDetailsRepeatWrapper = styled.div`
  margin-top: 167px;
  width: 100%;
  height: 364px;
  background: #f9f9f9;
`

export const NavBarMainMenusWrapper = styled.div`
  top: 47px;
  margin: 0 auto;
  width: ${(props: IProps) => (props.language === 'kor' ? '1007px' : '919px')};
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
  width: ${(props: IProps) => (props.language === 'kor' ? '1007px' : '919px')};
  margin: 0 auto;
  top: 80px;
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
  color: #6d6d6d;
`
export const ApplicationsDetailsWrapper = styled.div`
  margin-left: ${(props: IProps) =>
    props.language === 'kor' ? '98px' : '140px'};
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
  color: #6d6d6d;
`

export const AboutUsDetailsWrapper = styled.div`
  margin-left: 198px;
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
  color: #6d6d6d;
`
export const CareersDetailsWrapper = styled.div`
  margin-left: 89px;
  max-width: 71px;
  display: flex;
  flex-direction: column;
`
export const CareersDetails = styled.span`
  margin-bottom: 25px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #6d6d6d;
`
