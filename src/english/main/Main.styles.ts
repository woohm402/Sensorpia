import styled from '@emotion/styled'
interface IProps {
  translate?: any
  language?: any
  data?: any
}
export const SliderWrapper = styled.div`
  width: 100vw;
  display: flex;
`

export const SliderMainWrapper = styled.div`
  position: relative;
  width: 1100px;
  height: 441px;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
`
export const SliderTextWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 70px;
  max-width: 250px;
  z-index: 99;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  color: #ffffff;
`
export const SliderSubTextWrapper = styled.div`
  position: absolute;
  top: 107px;
  left: 70px;
  max-width: 400px;
  z-index: 99;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
`
export const SliderSubDraggableWrapper = styled.div`
  width: auto;
  height: 100%;
`

export const SliderDraggableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1100px;
  height: 100%;
  overflow: hidden;
  position: relative;
`

export const SliderImage = styled.div`
  width: 1100px;
  height: 441px;
  object-fit: cover;
  ${(props: any) => `background-image: url(${props.data})`}
`

export const SliderImageTwo = styled.div`
  width: 1100px;
  height: 441px;
  object-fit: cover;
  ${(
    props: any
  ) => `background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props.data}) `}
`
export const SliderImageThree = styled.div`
  width: 1100px;
  height: 441px;
  object-fit: cover;
  ${(
    props: any
  ) => `background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props.data}) `}
`
export const SliderImageFour = styled.div`
  width: 1100px;
  height: 441px;
  object-fit: cover;
  ${(
    props: any
  ) => `background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props.data}) `}
`

export const SliderPreviousButton = styled.div`
  cursor: pointer;
  top: 206px;
  left: 30px;
  width: 10px;
  height: 30px;
  position: absolute;
  ${(props: any) => `background:url(${props.data})`};
`
export const SliderNextButton = styled.div`
  top: 206px;
  left: 1060px;
  cursor: pointer;
  width: 10px;
  height: 30px;
  ${(props: any) => `background:url(${props.data})`};
  position: absolute;
  transform: rotate(180deg);
`
export const SliderInnerImageWrapper = styled.div`
  opacity: 1;
  display: flex;
  flex-direction: row;
  width: 7680px;
  height: 441px;
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
  max-width: 1100px;
  margin: 35px auto 0px auto;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
  text-align: center;
`

export const MainTitle = styled.span``

export const MainOuterWrapper = styled.div`
  display: flex;
  margin: 35px auto 0px auto;
  justify-content: center;
  width: 1100px;
`

export const MainLineWrapper = styled.div`
  width: 850px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const MainFirstLineDivider = styled.div`
  width: 394px;
  height: 0px;
  border: 2px solid #9c9d9e;
`
export const MainSecondLineDivider = styled.div`
  width: 394px;
  height: 0px;
  border: 2px solid #9c9d9e;
`
export const MainProductsOuterWrapper = styled.div`
  margin: 15px auto 0px auto;
  width: 1100px;
  display: flex;
  justify-content: center;
`

export const MainProductsNameWrapper = styled.div`
  width: 667px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MainProductOneWrapper = styled.div`
  max-width: 211px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #262626;
`

export const MainProductTwoWrapper = styled.div`
  max-width: 211px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #262626;
`
export const MainOuterImagesWrapper = styled.div`
  margin: 0px auto 0px auto;
  width: 1100px;
  display: flex;
  justify-content: center;
`
export const MainImagesWrapper = styled.div`
  margin-top: 20px;
  width: 850px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const SatelliteWrapper = styled.div`
  width: 394px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const SatelliteSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DefenseSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SatelliteImageWrapper = styled.div`
  position: relative;
`

export const DefenseImageWrapper = styled.div`
  position: relative;
`

export const SatelliteImageOne = styled.div`
  position: relative;
  width: 192px;
  height: 266px;
  ${(props: any) => `background: url(${props.data})`}
`
export const SatelliteImageOneText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
  top: 237px;
  left: 142px;
`

export const SatelliteImageTwo = styled.div`
  position: relative;
  width: 192px;
  height: 266px;
  ${(props: any) => `background: url(${props.data})`}
`
export const SatelliteImageTwoText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
  top: 237px;
  left: 142px;
`
export const DefenseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 394px;
`

export const DefenseImageOne = styled.div`
  position: relative;
  width: 192px;
  height: 266px;
  ${(props: any) => `background: url(${props.data})`};
`
export const DefenseImageOneText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
  top: 237px;
  left: 142px;
`

export const DefenseImageTwo = styled.div`
  position: relative;
  width: 192px;
  height: 266px;
  ${(props: any) => `background: url(${props.data})`};
`
export const DefenseImageTwoText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
  top: 237px;
  left: 142px;
`
export const SpecificationButtonsWrapper = styled.div`
  margin: 15px auto 0px auto;
  width: 1100px;
  display: flex;
  flex-direction: row;
`
export const SpecificiationOuterSatelliteButtonsWrapper = styled.div`
  margin-left: 145px;
`
export const SpecificationSatelliteButtonsWrapper = styled.div`
  width: 354px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const SpecificationButtonHref = styled.a``

export const SpecificationButton = styled.button`
  margin-top: 15px;
  width: 152px;
  height: 30px;
  background: #f4f7ff;
  border: 1px solid #0070c0;
  box-sizing: border-box;
  border-radius: 30px;
  color: #0070c0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  cursor: pointer;
`
export const SpecificationDefenseButtonsWrapper = styled.div`
  width: 354px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 113px;
`
export const MainThirdLineDivider = styled.div`
  margin: 65px auto 0px auto;
  width: 394px;
  height: 0px;
  border: 2px solid #9c9d9e;
`

export const MainThirdProductWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #262626;
  min-width: 201px;
  margin: 15px auto 0px auto;
`

export const MainThirdProductImageWrapper = styled.div`
  margin: 20px auto 0px auto;
  width: 393px;
  height: 318px;
  ${(props: any) => `background:url(${props.data})`};
`
export const TorquerButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
`
export const NavBarOuterWrapper = styled.div`
  min-width: 100vw;
  height: 340px;
  background: #f9f9f9;
  margin-top: 95px;
`

export const NavBarDetailsRepeatWrapper = styled.div`
  width: 1100px;
  height: 340px;
  margin: 0 auto;
`

export const NavBarMainMenusWrapper = styled.div`
  top: 47px;
  margin: 0 auto;
  width: 595px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`
export const NavBarMainMenu = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
`
export const NavBarMainMenuDetailWrapper = styled.div`
  position: relative;
  width: 595px;
  margin: 0 auto;
  top: 80px;
  display: flex;
  flex-direction: row;
`
export const ProductDetailsWrapper = styled.div`
  max-width: 101px;
  display: flex;
  flex-direction: column;
`
export const ProductDetails = styled.span`
  margin-bottom: 15px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #6d6d6d;
`
export const ApplicationsDetailsWrapper = styled.div`
  margin-left: ${(props: IProps) =>
    props.language === 'kor' ? '20px' : '60px'};
  min-width: 120px;
  display: flex;
  flex-direction: column;
`
export const ApplicationsDetails = styled.span`
  margin-bottom: 15px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #6d6d6d;
`

export const AboutUsDetailsWrapper = styled.div`
  margin-left: ${(props: IProps) =>
    props.language === 'kor' ? '35px' : '70px'};
  max-width: ${(props: IProps) =>
    props.language === 'kor' ? '76px' : '120px'};
  display: flex;
  flex-direction: column;
`
export const AboutUsDetails = styled.span`
  margin-bottom: 15px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #6d6d6d;
`
export const CareersDetailsWrapper = styled.div`
  margin-left: 49px;
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
