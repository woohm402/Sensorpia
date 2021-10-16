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
  CareersDetailsWrapper,
  CareersDetails,
  MainTitle,
  MainOuterWrapper,
  MainProductsOuterWrapper,
  MainOuterImagesWrapper,
  SpecificiationOuterSatelliteButtonsWrapper,
  NavBarOuterWrapper,
} from './Main.styles'
interface IProps {
  data: any
  onClickSliderNext: any
  translate: any
  onClickSliderPrevious: any
  language: any
  onClickProductDetails: any
  onClickApplicationDetails: any
  onClickAboutUsDetails: any
  onClickCareersDetails: any
}
const MainUI = ({
  data,
  onClickSliderNext,
  translate,
  onClickSliderPrevious,
  language,
  onClickProductDetails,
  onClickApplicationDetails,
  onClickAboutUsDetails,
  onClickCareersDetails,
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
              <SliderImage
                //@ts-ignore
                data={data.main.Slider.Image1}
              />
              <SliderImageTwo
                //@ts-ignore
                data={data.main.Slider.Image2}
              />
              <SliderImageThree
                //@ts-ignore
                data={data.main.Slider.Image3}
              />
              <SliderImageFour
                //@ts-ignore
                data={data.main.Slider.Image4}
              />
            </SliderInnerImageWrapper>
          </SliderMidWrapper>
          <SliderPreviousButton
            onClick={onClickSliderPrevious}
            //@ts-ignore
            data={data.main.Slider.Previous}
          />
          <SliderNextButton
            onClick={onClickSliderNext}
            //@ts-ignore
            data={data.main.Slider.Previous}
          />
        </SliderDraggableWrapper>
      </SliderMainWrapper>
      <MainTitleWrapper>
        <MainTitle>{data.main.title}</MainTitle>
      </MainTitleWrapper>
      <MainOuterWrapper>
        <MainLineWrapper>
          <MainFirstLineDivider />
          <MainSecondLineDivider />
        </MainLineWrapper>
      </MainOuterWrapper>
      <MainProductsOuterWrapper>
        <MainProductsNameWrapper>
          <MainProductOneWrapper>
            {data.main.mainProductOneName}
          </MainProductOneWrapper>
          <MainProductTwoWrapper>
            {data.main.mainProductTwoName}
          </MainProductTwoWrapper>
        </MainProductsNameWrapper>
      </MainProductsOuterWrapper>
      <MainOuterImagesWrapper>
        <MainImagesWrapper>
          <SatelliteWrapper>
            <SatelliteImageOne
              //@ts-ignore
              data={data.main.satellite[0]}
            >
              <SatelliteImageOneText>
                {data.main.satelliteImageNames.SatelliteOne}
              </SatelliteImageOneText>
            </SatelliteImageOne>
            <SatelliteImageTwo
              //@ts-ignore
              data={data.main.satellite[1]}
            >
              <SatelliteImageTwoText>
                {data.main.satelliteImageNames.SatelliteTwo}
              </SatelliteImageTwoText>
            </SatelliteImageTwo>
          </SatelliteWrapper>
          <DefenseWrapper>
            <DefenseImageOne
              //@ts-ignore
              data={data.main.defense[0]}
            >
              <DefenseImageOneText>
                {data.main.defenseImageNames.DefenseOne}
              </DefenseImageOneText>
            </DefenseImageOne>
            <DefenseImageTwo
              //@ts-ignore
              data={data.main.defense[1]}
            >
              <DefenseImageTwoText>
                {data.main.defenseImageNames.DefenseTwo}
              </DefenseImageTwoText>
            </DefenseImageTwo>
          </DefenseWrapper>
        </MainImagesWrapper>
      </MainOuterImagesWrapper>
      <SpecificationButtonsWrapper>
        <SpecificiationOuterSatelliteButtonsWrapper>
          <SpecificationSatelliteButtonsWrapper>
            {new Array(2).fill(1).map((_: any) => (
              <SpecificationButton key="">
                {data.main.specificationButton}
              </SpecificationButton>
            ))}
          </SpecificationSatelliteButtonsWrapper>
        </SpecificiationOuterSatelliteButtonsWrapper>
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
      <MainThirdProductImageWrapper
        //@ts-expect-error
        data={data.main.magneticTorquer}
      />
      <TorquerButtonWrapper>
        <SpecificationButton>
          {data.main.specificationButton}
        </SpecificationButton>
      </TorquerButtonWrapper>
      <NavBarOuterWrapper>
        <NavBarDetailsRepeatWrapper>
          <NavBarMainMenusWrapper>
            {data.navBar?.list.map((data: any) => (
              <NavBarMainMenu key="">{data}</NavBarMainMenu>
            ))}
          </NavBarMainMenusWrapper>
          <NavBarMainMenuDetailWrapper>
            <ProductDetailsWrapper>
              {data.navBar?.products.map((data: any, index: any) => (
                <ProductDetails
                  key=""
                  id={index}
                  onClick={onClickProductDetails}
                >
                  {data}
                </ProductDetails>
              ))}
            </ProductDetailsWrapper>
            <ApplicationsDetailsWrapper language={language}>
              {data.navBar?.applications.map((data: any, index: any) => (
                <ApplicationsDetails
                  key=""
                  id={index}
                  onClick={onClickApplicationDetails}
                >
                  {data}
                </ApplicationsDetails>
              ))}
            </ApplicationsDetailsWrapper>
            <AboutUsDetailsWrapper language={language}>
              {data.navBar?.aboutUs.map((data: any, index: any) => (
                <AboutUsDetails
                  key=""
                  id={index}
                  onClick={onClickAboutUsDetails}
                >
                  {data}
                </AboutUsDetails>
              ))}
            </AboutUsDetailsWrapper>
            {language === 'kor' && (
              <CareersDetailsWrapper>
                {data.navBar?.careers.map((data: any, index: any) => (
                  <CareersDetails
                    key=""
                    id={index}
                    onClick={onClickCareersDetails}
                  >
                    {data}
                  </CareersDetails>
                ))}
              </CareersDetailsWrapper>
            )}
          </NavBarMainMenuDetailWrapper>
        </NavBarDetailsRepeatWrapper>
      </NavBarOuterWrapper>
    </>
  )
}

export default MainUI
