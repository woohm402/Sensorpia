import {
  SliderDraggableWrapper,
  SliderImage,
  SliderImageFour,
  SliderImageThree,
  SliderImageTwo,
  SliderInnerImageWrapper,
  SliderMainWrapper,
  SliderTextWrapper,
  SliderNextButton,
  SliderPreviousButton,
  SliderMidWrapper,
  SliderSubTextWrapper,
  MainTitleWrapper,
  MainLineWrapper,
  MainFirstLineDivider,
  MainSecondLineDivider,
  MainProductsNameWrapper,
  MainProductOneWrapper,
  MainProductTwoWrapper,
  MainImagesWrapper,
  SatelliteWrapper,
  SatelliteImageOne,
  SatelliteImageTwo,
  DefenseWrapper,
  DefenseImageOne,
  DefenseImageTwo,
  SpecificationButton,
  SpecificationButtonsWrapper,
  SpecificationSatelliteButtonsWrapper,
  SpecificationDefenseButtonsWrapper,
  SatelliteImageOneText,
  SatelliteImageTwoText,
  DefenseImageOneText,
  DefenseImageTwoText,
  MainThirdLineDivider,
  MainThirdProductWrapper,
  MainThirdProductImageWrapper,
  TorquerButtonWrapper,
  NavBarDetailsRepeatWrapper,
  NavBarMainMenusWrapper,
  NavBarMainMenu,
  NavBarMainMenuDetailWrapper,
  ProductDetailsWrapper,
  ProductDetails,
  ApplicationsDetailsWrapper,
  ApplicationsDetails,
  AboutUsDetailsWrapper,
  AboutUsDetails,
} from './Main.styles'
interface IProps {
  data: any
  onClickSliderNext: any
  translate: any
  onClickSliderPrevious: any
}
const MainUI = ({
  data,
  onClickSliderNext,
  translate,
  onClickSliderPrevious,
}: IProps) => {
  return (
    <>
      <SliderMainWrapper>
        <SliderTextWrapper>{data.SliderText.SliderMainText}</SliderTextWrapper>
        <SliderSubTextWrapper>
          {data.SliderText.SliderSubText}
        </SliderSubTextWrapper>
        <SliderDraggableWrapper>
          <SliderMidWrapper>
            <SliderInnerImageWrapper translate={translate}>
              <SliderImage />
              <SliderImageTwo />
              <SliderImageThree />
              <SliderImageFour />
            </SliderInnerImageWrapper>
          </SliderMidWrapper>
          <SliderPreviousButton onClick={onClickSliderPrevious} />
          <SliderNextButton onClick={onClickSliderNext} />
        </SliderDraggableWrapper>
      </SliderMainWrapper>
      <MainTitleWrapper>{data.main.title}</MainTitleWrapper>
      <MainLineWrapper>
        <MainFirstLineDivider />
        <MainSecondLineDivider />
      </MainLineWrapper>
      <MainProductsNameWrapper>
        <MainProductOneWrapper>
          {data.main.mainProductOneName}
        </MainProductOneWrapper>
        <MainProductTwoWrapper>
          {data.main.mainProductTwoName}
        </MainProductTwoWrapper>
      </MainProductsNameWrapper>
      <MainImagesWrapper>
        <SatelliteWrapper>
          <SatelliteImageOne>
            <SatelliteImageOneText>
              {data.main.satelliteImageNames.SatelliteOne}
            </SatelliteImageOneText>
          </SatelliteImageOne>
          <SatelliteImageTwo>
            <SatelliteImageTwoText>
              {data.main.satelliteImageNames.SatelliteTwo}
            </SatelliteImageTwoText>
          </SatelliteImageTwo>
        </SatelliteWrapper>
        <DefenseWrapper>
          <DefenseImageOne>
            <DefenseImageOneText>
              {data.main.defenseImageNames.DefenseOne}
            </DefenseImageOneText>
          </DefenseImageOne>
          <DefenseImageTwo>
            <DefenseImageTwoText>
              {data.main.defenseImageNames.DefenseTwo}
            </DefenseImageTwoText>
          </DefenseImageTwo>
        </DefenseWrapper>
      </MainImagesWrapper>
      <SpecificationButtonsWrapper>
        <SpecificationSatelliteButtonsWrapper>
          {new Array(2).fill(1).map((_: any) => (
            <SpecificationButton key="">
              {data.main.specificationButton}
            </SpecificationButton>
          ))}
        </SpecificationSatelliteButtonsWrapper>
        <SpecificationDefenseButtonsWrapper>
          {new Array(2).fill(1).map((_: any) => (
            <SpecificationButton key="">
              {data.main.specificationButton}
            </SpecificationButton>
          ))}
        </SpecificationDefenseButtonsWrapper>
      </SpecificationButtonsWrapper>
      <MainThirdLineDivider />
      <MainThirdProductWrapper>
        {data.main.mainProductThreeName}
      </MainThirdProductWrapper>
      <MainThirdProductImageWrapper />
      <TorquerButtonWrapper>
        <SpecificationButton>
          {data.main.specificationButton}
        </SpecificationButton>
      </TorquerButtonWrapper>
      <NavBarDetailsRepeatWrapper>
        <NavBarMainMenusWrapper>
          {data.NavBar?.list.map((data: any) => (
            <NavBarMainMenu key="">{data}</NavBarMainMenu>
          ))}
        </NavBarMainMenusWrapper>
        <NavBarMainMenuDetailWrapper>
          <ProductDetailsWrapper>
            {data.NavBar.Products.map((data: any) => (
              <ProductDetails key="" id={data}>
                {data}
              </ProductDetails>
            ))}
          </ProductDetailsWrapper>
          <ApplicationsDetailsWrapper>
            {data.NavBar.Applications.map((data: any) => (
              <ApplicationsDetails key="" id={data}>
                {data}
              </ApplicationsDetails>
            ))}
          </ApplicationsDetailsWrapper>
          <AboutUsDetailsWrapper>
            {data.NavBar.AboutUs.map((data: any) => (
              <AboutUsDetails key="" id={data}>
                {data}
              </AboutUsDetails>
            ))}
          </AboutUsDetailsWrapper>
        </NavBarMainMenuDetailWrapper>
      </NavBarDetailsRepeatWrapper>
    </>
  )
}

export default MainUI
